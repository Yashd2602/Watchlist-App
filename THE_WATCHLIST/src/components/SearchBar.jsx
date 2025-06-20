import React from 'react'
import { cinemaState } from '../Context/Context';

function SearchBar() {
    const {state:{searchQury},dispatch} = cinemaState();
  return (
    <input className="search-bar" type="text" placeholder='Search Movies & TV-Shows'onChange={(e)=>{dispatch({type:"SEARCH_QUERY",payload:e.target.value.toLowerCase(),})}}/>
  )
}

export default SearchBar
