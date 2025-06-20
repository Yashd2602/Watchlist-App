import React from 'react'
import { Link } from 'react-router-dom';
import { cinemaState } from '../Context/Context';

function SingleTVShows(tv) {
   const {state:{singleMovie},dispatch} = cinemaState()
 
  const imageLink = "https://image.tmdb.org/t/p/w500/" 

  return (
    <div className='movies-list'>

        <Link to="/tvshowinfo"><div className='movies-poster' onClick={()=>{dispatch({type:"SEE_SINGLE_TVSHOW",payload:tv})}}><img src={imageLink + tv.prod.poster_path} alt="" /></div></Link>
        <div className='movie-info'><h1>{tv.prod.name}</h1><h4>{tv.prod.first_air_date}</h4></div>
        
    </div>
  )
}


export default SingleTVShows
