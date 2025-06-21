import React from 'react'
import { Link } from 'react-router-dom'
import { cinemaState } from '../Context/Context';
import file from "../assets/file.png"

function Header() {
  return (
    <div className='Header'><h1>The~Watchlist</h1> 
    <Link to="/"><img className='watchlist-icon' src={file} alt="Watchlist" /></Link>
    <Link to='/watchlist'><button>WatchList</button></Link>
    <Link to= "/"><button>Explore More Movies & TV_Shows</button></Link>
    </div>
  )
}

export default Header
