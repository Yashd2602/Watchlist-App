import React,{createContext, useContext, useEffect, useReducer, useState} from 'react'
import axios from "axios"
import { dataReducer } from './Reducers';

 export const cinemaContext = createContext();


function Context({children}) {
const [isLoading, setIsLoading]= useState(true);
const APIKEY = "d402297566b712f80b4cb37620ec2fb4"
const localWatchList = JSON.parse(localStorage.getItem("WatchList")) || [];
const initialState = {
  moviesData: [],
  tvData:[],
  theWatchList: localWatchList,
  allWatchList: localWatchList,
  movieInfo:[],
  tvShowInfo:[],
  searchQuery:'',
};
const [state, dispatch] = useReducer(dataReducer, initialState);
const [page,setPage] = useState(1);
const [genre,setGenre] = useState('')

useEffect(()=>{
  const fetchCinema =async()=>{
    const results = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}&page=${page}`)
    dispatch({type:"SET_MOVIES_DATA",payload:results.data.results});
    setIsLoading(false);
    
  }
  fetchCinema();
},[page])
useEffect(()=>{
  const fetchCinema =async()=>{
    const results = await axios(`https://api.themoviedb.org/3/trending/tv/day?api_key=${APIKEY}&page=${page}`)
    dispatch({type:"SET_TV_DATA",payload:results.data.results});
    setIsLoading(false);
    
  }
  fetchCinema();
},[page])
useEffect(()=>{
  localStorage.setItem("WatchList",JSON.stringify(state.allWatchList));
},[state.allWatchList])


  return (
    <cinemaContext.Provider value={{isLoading,setIsLoading,state,dispatch,page,setPage,genre,setGenre}}>
      {children}
    </cinemaContext.Provider>
  )
}

export default Context

export const cinemaState =()=>{
  return useContext(cinemaContext);
}