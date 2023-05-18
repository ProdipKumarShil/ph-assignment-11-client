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
        element: <MyToys></MyToys>  // this will be private route
      },
      {
        path: '/about-us',
        element: <About></About>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

export default router;