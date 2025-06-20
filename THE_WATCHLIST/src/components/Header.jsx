import React from 'react'
import { Link } from 'react-router-dom'
import { cinemaState } from '../Context/Context';

function Header() {
  return (
    <div className='Header'><h1>The~Watchlist</h1> 
    <Link to="/"><img className='watchlist-icon' src="/img/file.png" alt="Watchlist" /></Link>
    <Link to='/watchlist'><button>WatchList</button></Link>
    <Link to= "/"><button>Explore More Movies & TV_Shows</button></Link>
    </div>
  )
}

export default Header
