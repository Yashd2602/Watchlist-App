import Homepage from './components/Homepage'
import {createBrowserRouter,RouterProvider} from"react-router-dom"
import PageNotFound from './components/PageNotFound'
import Context from './Context/Context'
import Movies from './components/Movies'
import MovieInfo from './components/MovieInfo'
import TVShows from './components/TVShows'
import TVShowsInfo from './components/TVShowsInfo'
import WatchList from './components/WatchList'


function App() {
const router = createBrowserRouter([{
  path:"/",
  element:<Homepage />,
  errorElement:<PageNotFound />
},
{
  path:"/context",
  element:<Context />,
},
{
  path:"/movies",
  element:<Movies />,
},
{
  path:"/movieinfo",
  element:<MovieInfo />,
},
{
  path:"/tvshows",
  element:<TVShows />,
},
{
  path:"/tvshowinfo",
  element:<TVShowsInfo />,
},
{
  path:"/watchlist",
  element:<WatchList />,
},
],{basename: import.meta.env.DEV ? '/' : '/Watchlist-App'})

  return (
    <RouterProvider router={router}/>
  )
}

export default App
