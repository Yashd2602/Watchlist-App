import React from 'react'
import { Link } from 'react-router-dom';
import { cinemaState } from '../Context/Context';


function SingleMovies(movie) {
  const {state:{singleMovie},dispatch} = cinemaState()
 
  const imageLink = "https://image.tmdb.org/t/p/w500/" 

  return (
    <div className='movies-list' key={movie.prod.id}>

        <Link to="/movieinfo"><div className='movies-poster' onClick={()=>{dispatch({type:"SEE_SINGLE_MOVIE",payload:movie})}}><img src={imageLink + movie.prod.poster_path} alt="" /></div></Link>
        <div className='movie-info'><h1>{movie.prod.title}</h1><h4>{movie.prod.release_date}</h4></div>
        
    </div>
  )
}

export default SingleMovies
