import React, { useContext } from 'react'
import { cinemaState } from '../Context/Context'
import {cinemaContext} from "../Context/Context"
import Header from './Header'
import SingleTVShows from './SingleTVShows'
import SearchBar from './SearchBar'

function TVShows() {
 const imageLink = "https://image.tmdb.org/t/p/w500/"
 
  const {state:{tvData,searchQuery},dispatch} = cinemaState()
  const {page,setPage} = useContext(cinemaContext);
  const {isLoading,setIsLoading} = useContext(cinemaContext);

  function pageIncrement (){
    return setPage(page + 1);
  }
  const filteredTVShows = tvData.filter((tv)=>tv.name.toLowerCase().includes(searchQuery))

  return (<>
  {isLoading ?(<div>"Loading"</div>):(<>
  <Header />
  <SearchBar />
    <div className='movie-page'>
      {filteredTVShows.map((tv)=>(
         <SingleTVShows prod={tv} key={tv.id}/>
      ))}
      <div className="movies-list  show-more-card"><button onClick={()=>pageIncrement()}>Show More TV-Shows</button></div>
    </div></>)}
  </>)
}


export default TVShows
