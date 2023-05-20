import React from 'react';
import { Outlet } from 'react-router-dom';

const Category = () => {
  return (
    <div>
      category
      <Outlet></Outlet>
    </div>
  );
};

export default Category;