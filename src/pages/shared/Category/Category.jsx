import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {

  const catagories = [
    {name: "Car", link: "car"},
    {name: "Animal", link: "animal"},
    {name: "Doll", link: "doll"},
    {name: "Lego", link: "lego"},
    {name: "Marvel", link: "marvel"},
  ]
  let location;
  if(window.location.pathname == '/'){
    location = false
  } else {
    location = true
  }
  console.log(location)

  return (
    <div className="hidden md:block col-span-12 md:col-span-3 mt-2">
      <h4 className='text-xl font-semibold text-bg bg-primary py-2 px-3 mb-2'>Toys Category</h4>
      <ul className="w-full  overflow-hidden font-semibold text-xl text-gray-900 bg-white border border-gray-200 rounded-lg   ">
        {
          location && <li ><Link to={`/allToys/`} className="w-full px-4 py-[18px] block hover:bg-gray-200 border-b">All Toys</Link></li>
        }
        {
          catagories.map((category, index) => <li key={index}><Link to={`/allToys/categories/${category.link}`} className="w-full px-4 py-[18px] block hover:bg-gray-200 border-b">{category.name}</Link></li>)
        }
      </ul>

    </div>
  );
};

export default Category;