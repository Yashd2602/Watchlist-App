import React, { useContext } from 'react'
import SingleMovies from './SingleMovies'
import { cinemaState } from '../Context/Context'
import {cinemaContext} from "../Context/Context"
import Header from './Header'
import SearchBar from './SearchBar'

function Movies() {
 const imageLink = "https://image.tmdb.org/t/p/w500/"
 

  const {state:{moviesData,searchQuery},dispatch} = cinemaState()
  const {page,setPage} = useContext(cinemaContext);
  const {isLoading,setIsLoading} = useContext(cinemaContext);

  function pageIncrement (){
    return setPage(page + 1);
  }
  const filteredMovies = moviesData.filter((movie)=>movie.title.toLowerCase().includes(searchQuery))


  return (<>
  {isLoading ?(<div>"Loading"</div>):(<><Header />
  <SearchBar />
    <div className='movie-page'>
      {filteredMovies.map((movie)=>(
         <SingleMovies prod={movie} key={movie.id}/>
      ))}
      <div className="movies-list  show-more-card"><button onClick={()=>pageIncrement()}>Show More Movies</button></div>
    </div></>)}
  </>
  )
}

export default Movies
