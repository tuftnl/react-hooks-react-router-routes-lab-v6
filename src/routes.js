import Home from './pages/Home'
import Actors from './pages/Actors'
import Movie from './pages/Movie'
import Directors from './pages/Directors'
import ErrorPage from './pages/ErrorPage'

const routes = [
   {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
   },
   {
    path: '/actors',
    element: <Actors />,
    errorElement: <ErrorPage />
   },
   {path: '/movie/:id',
   element: <Movie />,
   errorElement: <ErrorPage />
  },
  {
    path: '/directors',
    element: <Directors />,
    errorElement: <ErrorPage />
  }
  ];

export default routes;