import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../../../provider/AuthProvider';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import SearchBar from '../SearchBar/SearchBar';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [menu, setMenu] = useState(false)
  const handleLogOut = () => {
    logOut()
      .then(result => console.log('logout success fully'))
      .catch(error => console.log(error))
  }
  console.log(menu)
  
  return (
    <div className='px-2'>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to='/' className="flex mx-auto mb-4 md:mb-0 items-center">
            <img src={logo} className="h-32 mr-3" alt="Logo" />
          </Link>
          <SearchBar />
          <div className="flex mx-auto  items-center">
            <Link className='text-3xl bg-primary text-bg p-4 rounded-full hover:text-black hover:bg-gray-400 mr-4'><AiOutlineShoppingCart /></Link>

            {
              user?.photoURL ? <img className='w-16 rounded-full' src={user.photoURL} /> : <Link className={user ? 'text-3xl bg-primary text-bg p-4 rounded-full hover:text-black hover:bg-gray-400 mr-4' : 'hidden'}><CgProfile /></Link>
            }
          </div>
        </div>
      </nav>
      <nav className="bg-primary relative text-[#c8d8e4] mx-auto max-w-screen-xl rounded-t-3xl">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              <HiOutlineMenuAlt1 className={menu ? 'hidden' : 'text-2xl'} />
              <RxCross2 className={menu ? 'text-2xl' : 'hidden'} />
            </div>

            {/* for hambar bug menu */}
            <ul className={menu ? ' md:hidden text-black bg-white p-8 z-40 left-8 rounded-lg shadow-lg absolute ml-4 mt-0 mr-6 py-4 space-x-8 font-bold' : 'hidden md:hidden  ml-4 mt-0 mr-6 py-4 space-x-8 font-bold'}>
              {/* <li>
                <Link href="/" className="bg-bg p-2   text-black hover:underline" aria-current="page">Home</Link>
              </li> */}
              <li className='text-xl'>
                <NavLink to='/' className={({ isActive }) => isActive ? ' py-2 mb-4 text-black hover:underline' : 'hover:underline'}>Home</NavLink>
              </li>
              <li className='mb-3'>
                <NavLink to='/blog' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline mt-4'}>Blog</NavLink>
              </li>
              <li className='mb-3'>
                <NavLink to='/about-us' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>About Us</NavLink>
              </li>
              <li className='mb-3'>
                <NavLink to='/my-toys' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>My Toys</NavLink>
              </li>
              <li className='mb-3'>
                <NavLink to='/add-toys' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>Add a Toys</NavLink>
              </li>
              <li className='mb-3'>
                <NavLink to='/all-toys' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>All Toys</NavLink>
              </li>
              <li className={user ? 'hidden' : ' mb-3'}>
                <NavLink to='/login' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>Login</NavLink>
              </li>
              <li className={user ? 'hidden' : ' mb-3'}>
                <NavLink to='/register' className={({ isActive }) => isActive ? 'bg-bg py-2 px-4 text-black hover:underline' : 'hover:underline'}>Register</NavLink>
              </li >
              <li className={user ? '' : 'hidden'}>
                <button onClick={handleLogOut}>logOut</button>
              </li>

            </ul>


            <ul className="md:flex hidden flex-row  ml-4 mt-0 mr-6 py-4 space-x-8 font-bold">
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