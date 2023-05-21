import React, { useContext } from 'react';
import logo from '../../../assets/logo/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../../../provider/AuthProvider';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(result => console.log('logout success fully'))
      .catch(error => console.log(error))
  }
  console.log(user)
  return (
    <div>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to='/' className="flex items-center">
            <img src={logo} className="h-32 mr-3" alt="Logo" />
          </Link>
          <div className="grow px-12">
            <div>
              <label htmlFor="default-search" className="mb-2  font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-5  pl-10  text-gray-900 border border-gray-300 rounded-full bg-gray-50 " placeholder="Search CandyLand Toys...." />
                <button type="submit" className="text-bg absolute right-3 bottom-2.5 bg-primary rounded-full  font-medium  text-sm px-5 py-3 ">Search</button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link className='text-3xl bg-primary text-bg p-4 rounded-full hover:text-black hover:bg-gray-400 mr-4'><AiOutlineShoppingCart /></Link>
            
            {
              user?.photoURL ? <img className='w-16 rounded-full' src={user.photoURL}/> : <Link className={user ? 'text-3xl bg-primary text-bg p-4 rounded-full hover:text-black hover:bg-gray-400 mr-4' : 'hidden'}><CgProfile /></Link> 
            }
          </div>
        </div>
      </nav>
      <nav className="bg-primary text-[#c8d8e4] mx-auto max-w-screen-xl rounded-t-3xl">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row  ml-4 mt-0 mr-6 py-4 space-x-8 font-bold">
              {/* <li>
                <Link href="/" className="bg-bg p-2   text-black hover:underline" aria-current="page">Home</Link>
              </li> */}
              <li>
                <NavLink to='/' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/blog' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>Blog</NavLink>
              </li>
              <li>
                <NavLink to='/about-us' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>About Us</NavLink>
              </li>
              <li>
                <NavLink to='/my-toys' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>My Toys</NavLink>
              </li>
              <li>
                <NavLink to='/add-toys' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>Add a Toys</NavLink>
              </li>
              <li>
                <NavLink to='/all-toys' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>All Toys</NavLink>
              </li>
              <li className={user ? 'hidden' : ''}>
                <NavLink to='/login' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>Login</NavLink>
              </li>
              <li className={user ? 'hidden' : ''}>
                <NavLink to='/register' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>Register</NavLink>
              </li >
              <li className={!user && 'hidden'}>
                <button onClick={handleLogOut}>logOut</button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;