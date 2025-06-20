export const dataReducer = (state,action)=>{
    switch(action.type){
        case "SET_MOVIES_DATA":
            return{...state,moviesData:[...state.moviesData,...action.payload]}
            case "SET_TV_DATA":
            return{...state,tvData:[...state.tvData,...action.payload]}
            case "SEE_SINGLE_MOVIE":
                return{...state,movieInfo:[action.payload]}
                case "SEE_SINGLE_TVSHOW":
                return{...state,tvShowInfo:[action.payload]}
                case "SEARCH_QUERY": 
                    return {...state,searchQuery:action.payload}
                    case"ADD_TO_WATCHLIST":
                    return {...state,theWatchList: [...state.theWatchList,{...action.payload }],allWatchList: [...state.allWatchList,{...action.payload }]}
                        case "REMOVE_FROM_WATCHLIST":
                        return {...state,theWatchList: state.allWatchList.filter((c) => c.prod.id !== action.payload.id),allWatchList: state.allWatchList.filter((c) => c.prod.id !== action.payload.id),};
                        case "ONLY_MOVIES_WATCHLIST":
                        return {...state,theWatchList: state.allWatchList.filter((c)=>c.prod.media_type === "movie")}
                        case "ONLY_TV_WATCHLIST":
                        return {...state,theWatchList:state.allWatchList.filter((c)=>c.prod.media_type=== "tv")}
                        case "FULL_WATCHLIST":
                        return {...state,theWatchList:state.allWatchList.filter((c)=>c.prod.media_type === "tv" ||"movie")}
                        
        default:
            return state;
    }
}