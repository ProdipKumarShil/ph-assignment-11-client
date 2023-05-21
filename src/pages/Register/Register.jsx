import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loginAnim from '../../assets/lottie/Login.json'
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/logo/google.png'
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
  const { googleSignUp, setUser, emailSignUp, updateUser } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleGoogleSignUp = () => {
    googleSignUp()
      .then(result =>{
        
        const user = result.user
        setUser(user)
        navigate('/')
      } )
      .catch(error => {
        console.log(error)
      })
  }

  // email and password sign up
  const handleEmailSignUp = e => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photoURL = form.photoURL.value

    emailSignUp(email, password)
      .then(result => {
        const userInfo = { displayName: name, photoURL: photoURL }
        updateUser(userInfo)
        const user = result.user
        setUser(user)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  return (
    <div className='mx-auto max-w-screen-xl grid grid-cols-1  md:grid-cols-2 items-center'>
      <Lottie animationData={loginAnim}/>
      <div className="mx-4">
        <form className='' onSubmit={handleEmailSignUp}>
          <h1 className='text-2xl font-semibold mb-4 '>Please Register</h1>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " required />
            <label for="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " required />
            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " required />
            <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="photoURL" id="floating_photo_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " required />
            <label for="floating_photo_url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
          </div>
          <p className="text-sm mb-4">Not have an Account? <Link className='hover:underline' to='/login'>Login</Link></p>
          <input type="submit" value="Register" class="text-bg text-xl font-semibold bg-primary focus:outline-none cursor-pointer w-full px-5 py-2.5 text-center 0" />
        </form>
          <button type="submit" onClick={handleGoogleSignUp} class="text-bg bg-gray-200 mt-2 focus:outline-none cursor-pointer w-full px-5 py-2.5 text-center " ><img className='h-8 mx-auto' src={google} alt="" /></button>
      </div>
    </div>
  );
};

export default Register;