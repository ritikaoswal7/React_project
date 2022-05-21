import {
    Routes,
    Route,
    NavLink,
    Outlet,
    useNavigate,
  } from 'react-router-dom';
  import { checkAuthentication } from './Authentication';
  
  const ProtectedRoute = () => {
    const navigate = useNavigate()
    const value = checkAuthentication();
    return(value ? <Outlet /> : <navigate to="/demo"/>);
  };

  export default ProtectedRoute;