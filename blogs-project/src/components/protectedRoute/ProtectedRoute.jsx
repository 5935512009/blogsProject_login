import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const user = localStorage.getItem('token');
  return user ? <Component {...rest} /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
