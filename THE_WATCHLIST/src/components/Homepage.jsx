import React, { useContext } from 'react'
import{Link} from 'react-router-dom'
import Header from './Header'
import { cinemaContext, cinemaState } from '../Context/Context'
import file from "../assets/file.png"
import bookmark from "../assets/bookmark.png"

function Homepage() {
  const{genre,setGenre} = useContext(cinemaContext);
  function getMovies(){
    setGenre('movie')
  }
  function getTV(){
    setGenre('tv')
  }
    
  return (
    <div className='container'>
      <div className='Header'><h1>The~Watchlist</h1> 
          <Link to="/"><img className='watchlist-icon' src={file} alt="Watchlist" /></Link>
          <Link to='/watchlist'><button>WatchList</button></Link></div>
      <div className='homepage'>
       <Link to="/movies"><button onClick={getMovies}>Movies</button></Link> <img className='cinema-time' src={bookmark} alt="" /><Link to="/tvshows"><button onClick={getTV}>TV Shows</button></Link>
      </div>
    </div>
  )
}

export default Homepage
