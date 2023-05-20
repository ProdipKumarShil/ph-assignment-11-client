import React from 'react';
import Lottie from "lottie-react";
import loginAnim from '../../assets/lottie/Login.json'
import { Link } from 'react-router-dom';
import google from '../../assets/logo/google.png'

const Login = () => {
  return (
    <div className='mx-auto max-w-screen-xl grid grid-cols-1  md:grid-cols-2 items-center'>
      <Lottie animationData={loginAnim} />
      <form className='mx-4'>
        <h1 className='text-2xl font-semibold mb-4 '>Please Login</h1>
        <div className="relative z-0 w-full mb-6 group">
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " required />
          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " required />
          <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <p className="text-sm mb-4">Not have an Account? <Link className='hover:underline' to='/register'>Register</Link></p>
        <input type="submit" value="Login" class="text-bg bg-primary focus:outline-none cursor-pointer w-full text-xl font-semibold px-5 py-2.5 text-center " />
        <button type="submit" class="text-bg bg-gray-200 mt-2 focus:outline-none cursor-pointer w-full px-5 py-2.5 text-center " ><img className='h-8 mx-auto' src={google} alt="" /></button>
      </form>
    </div>
  );
};

export default Login;