import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const {user} = useContext(AuthContext)
  const location = useLocation()

  if(user){
    return children
  }
  else {
    return <Navigate to="/register"></Navigate>
  }
};

export default PrivateRoute;