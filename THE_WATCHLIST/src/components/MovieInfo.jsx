import React, { useContext, useEffect, useState } from 'react'
import { cinemaContext, cinemaState } from '../Context/Context'
import Header from './Header'


function MovieInfo() {
     const {state:{movieInfo,theWatchList},dispatch} = cinemaState()
     const imageLink = "https://image.tmdb.org/t/p/w500/"
     const isInWatchlist = theWatchList.some((movie)=>movie.prod.id === movieInfo[0].prod.id)
     const {isLoading,setIsLoading} = useContext(cinemaContext);

     


     
  return (<>
  {isLoading ?(<div>"Loading"</div>):(<>
  <Header />
    <div>
      {movieInfo.map((movie)=>(
         <div className='container1' key={movie.prod.id}>
            <div className='movie-image'> <img src={imageLink + movie.prod.backdrop_path} alt="Movie" /> <h1>{movie.prod.title}</h1> </div>
            <div className='movie-desc'><h6>{movie.prod.overview}</h6> <h2>Adult:{movie.prod.adult?('Yes'):('No')}</h2> </div>
            <div className='release-date'> <h4> {movie.prod.release_date}</h4></div>
            <button disabled={isInWatchlist} onClick={()=>{dispatch({type:"ADD_TO_WATCHLIST",payload:movie,})}}><h1>{isInWatchlist?("✅Added To WatchList"):("Add To WatchList")}</h1></button>
         </div>
      ))}
    </div>
  </>)}
    </>)
}

export default MovieInfo
