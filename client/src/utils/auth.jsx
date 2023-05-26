import { useState, createContext, useContext } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { cookieCreate, cookieSearch, cookieRemove } from './cookie';
import { getAuth } from '../api/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    token: cookieSearch('token')
  });

  const login = async form => {
    console.log(form);
    const token = await getAuth(form);
    if (!!token) {
      cookieCreate(token.token, 60 * 60 * 24 * 365);
      setUser(token);
      navigate('/chooseprofile');
    }
  };

  const logout = () => {
    cookieRemove();
    setUser(null);
    navigate('/login');
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  console.log('txt');
  const auth = useContext(AuthContext);
  return auth;
};

const ProtectedRoute = () => {
  const auth = useAuth();

  if (!auth.user?.token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

const NoProtectedRoute = () => {
  const auth = useAuth();

  if (!!auth.user?.token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export { AuthProvider, ProtectedRoute, NoProtectedRoute, useAuth };
