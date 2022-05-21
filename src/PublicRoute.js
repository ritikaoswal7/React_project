import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { checkAuthentication } from './Authentication';
import Home from './Components/Home'
import { useNavigate } from 'react-router-dom';

const PublicRoute=({ children })=>{
    const navigate = useNavigate()
    const value = checkAuthentication()
    return value ? <navigate to="/Home"/> : children;
  
};

export default PublicRoute;
