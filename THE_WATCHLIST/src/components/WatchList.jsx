import React, { useState } from 'react'
import { cinemaState } from '../Context/Context'
import { Link } from 'react-router-dom'

function WatchList() {
    const{state:{theWatchList},dispatch} = cinemaState()
    const imageLink = "https://image.tmdb.org/t/p/w500/" 
  
  return (<>
      <div className='watchlist-Header' key={theWatchList.id}><h1>The~Watchlist</h1> 
    <Link to="/"><img className='watchlist-icon' src="/img/file.png" alt="Watchlist" /></Link>
    <Link to= "/"><button>Explore More Movies & TV_Shows</button></Link></div>
    <div className='filters'>
      <label>
        <input
          type="radio"
          name="option"
          value="All"
          onChange={()=>{dispatch({type:"FULL_WATCHLIST"})}}
        />
        ALL
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="option"
          value="TV"
          onChange={()=>{dispatch({type:"ONLY_TV_WATCHLIST"})}}
        />
        TV
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="option"
          value="Movie"
          onChange={()=>{dispatch({type:"ONLY_MOVIES_WATCHLIST"})}}
        />MOVIE
      </label></div>

    <div className='movie-page'>
      {theWatchList.map((cinema)=>{
         return (cinema.prod.media_type === "movie"?(<div className='mwc' key={cinema.prod.id}>
                <div className='movies-poster' > <img src={imageLink + cinema.prod.poster_path} alt="" /></div>
                <div className='movie-info'><h1>{cinema.prod.title}</h1><h4>{cinema.prod.release_date}</h4><button className='remove-watchlist-btn' onClick={()=>{dispatch({type:'REMOVE_FROM_WATCHLIST',payload:{id:cinema.prod.id}})}}>Remove From WatchList</button></div></div>):(<div className='tvwc' key={cinema.prod.id}> <div className='movies-poster'><img src={imageLink + cinema.prod.poster_path} alt="" /></div>
                <div className='movie-info' key={cinema.prod.id}><h1>{cinema.prod.name}</h1><h4>{cinema.prod.first_air_date}</h4><button className='remove-watchlist-btn' onClick={()=>{dispatch({type:'REMOVE_FROM_WATCHLIST',payload:{id:cinema.prod.id}})}}>Remove From WatchList</button></div> </div>))  
                })
      }
    </div></>
  )
}

export default WatchList
