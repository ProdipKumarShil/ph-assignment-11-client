import { data } from "autoprefixer";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [result, setResult] = useState([])
  const [input, setInput] = useState([])

  const fetchData = (value) => {
    fetch('https://candyland-toys-server.vercel.app/allToys')
      .then((res) => res.json())
      .then((products) => {
        const result = products.filter((product) => value && product && product.name && product.name.toLowerCase().includes(value))
        setResult(result)
      })
  }

  const handelChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  
  return (
    <>
      <div className="grow mx-auto mb-4 md:mb-0 px-12 flex flex-col relative">
        <div>
          <label
            htmlFor="default-search"
            className="mb-2  font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-5  pl-10  text-gray-900 border border-gray-300 rounded-full bg-gray-50 "
              placeholder="Search CandyLand Toys...."
              value={input}
              onChange={(e) => handelChange(e.target.value)}
            />
            <button
              type="submit"
              className="text-bg absolute right-3 bottom-2.5 bg-primary rounded-full  font-medium  text-sm px-5 py-3 ">
              Search
            </button>
          </div>
        </div>

        <ul className="absolute top-[66px] z-10 w-[90%] bg-gray-50 max-h-[200px] overflow-y-scroll rounded-xl">
          {
            result.map(product => <li key={product._id} className="  text-lg text-gray-600 font-bold border rounded-xl  hover:bg-gray-200"><Link to={`/singleToy/${product._id}`} className="block p-3">{product.name}</Link></li>)
          }
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
