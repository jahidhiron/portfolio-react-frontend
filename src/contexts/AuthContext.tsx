import { createContext, FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContextType, AuthProviderProps, UserDetails } from './interfaces';

import { RootState } from '@/store';

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const userDetails = useSelector((state: RootState) => state?.auth?.userDetails);
  const [auth, setAuth] = useState<UserDetails | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const updateAuthData = useCallback((data: UserDetails) => {
    setAuth(data);
  }, []);

  useEffect(() => {
    if (userDetails) {
      updateAuthData(userDetails);
    }
  }, [userDetails, updateAuthData]);

  useEffect(() => {
    if (!auth) {
      // navigate('/login', { replace: true });
    }
  }, [auth, location, navigate]);

  return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
