import React, { useContext } from 'react'
import { cinemaContext, cinemaState } from '../Context/Context'
import Header from './Header'

function TVShowsInfo() {
     const {state:{tvShowInfo,theWatchList},dispatch} = cinemaState()
     const imageLink = "https://image.tmdb.org/t/p/w500/"
     const isInWatchlist = theWatchList.some((movie)=>movie.prod.id ===
      tvShowInfo[0].prod.id)
      const {isLoading,setIsLoading} = useContext(cinemaContext);
  return (<>
  {isLoading ?(<div>"Loading"</div>):(<>
  <Header />
    <div>
      {tvShowInfo.map((tv)=>(
         <div className='container1' key={tv.prod.id}>
            <div className='movie-image'> <img src={imageLink + tv.prod.backdrop_path} alt="Movie" /> <h1>{tv.prod.name}</h1> </div>
            <div className='movie-desc'><h6>{tv.prod.overview}</h6> <h2>Adult:{tv.prod.adult?('Yes'):('No')}</h2> </div>
            <div className='release-date'> <h4> {tv.prod.first_air_date}</h4></div>
            <button disabled={isInWatchlist} onClick={()=>{dispatch({type:"ADD_TO_WATCHLIST",payload:tv,})}}><h1>{isInWatchlist?("✅Added To WatchList"):("Add To WatchList")}</h1></button>
         </div>
      ))}
    </div>
  </>)}
    </>)
}

export default TVShowsInfo
