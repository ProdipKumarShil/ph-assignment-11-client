import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;