import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import MyToys from '../pages/MyToys/MyToys';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import SingleToy from '../pages/shared/SingleToy/SingleToy';
import AddAToys from '../pages/AddAToys/AddAToys';
import AllToys from '../pages/AllToys/AllToys';
import PrivateRoute from './PrivateRoute';
import ToyCategory from '../pages/shared/ToyCategory/ToyCategory';
import Toys from '../layout/Toys';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/my-toys',
        element:  <PrivateRoute><MyToys></MyToys></PrivateRoute>  // this will be private route
      },
      {
        path: '/about-us',
        element: <About></About>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/add-toys',
        element: <PrivateRoute><AddAToys></AddAToys></PrivateRoute>
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>
      },
      {
        path: '/singleToy/:id',
        loader: ({ params }) => fetch(`https://candyland-toys-server.vercel.app/allToys/singleToy/${params.id}`),
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute> 
      },
      {
        path: '/allToys/categories/:category',
        loader: ({params}) => fetch(`http://localhost:5000/allToys/categories/${params.category}`),
        element: <ToyCategory />
      },
      {
        path: '/allToys',
        loader: () => fetch('http://localhost:5000/allToys'),
        element: <Toys />,
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

export default router;