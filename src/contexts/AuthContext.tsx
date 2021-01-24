import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useContext, useEffect, useState } from 'react';

export type AuthState = {
  token: string | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  setLoggedIn: (token: string) => void;
  setLoggedOut: () => void;
};

const AuthContext = React.createContext<AuthState>({
  token: undefined,
  isLoading: true,
  isLoggedIn: false,
  setLoggedIn: () => {},
  setLoggedOut: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setLoggedIn = useCallback(
    (tokenData: string) => {
      AsyncStorage.setItem('@campus_taxi_auth', tokenData);
      setToken(tokenData);
    },
    [setToken],
  );

  const setLoggedOut = useCallback(() => {
    AsyncStorage.setItem('@campus_taxi_auth', '');
    setToken(undefined);
  }, [setToken]);

  const getToken = useCallback(async () => {
    const data = await AsyncStorage.getItem('@campus_taxi_auth');
    if (data) {
      setToken(data);
    }
    setIsLoading(false);
  }, [setIsLoading, setToken]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoading,
        isLoggedIn: Boolean(token),
        setLoggedOut,
        setLoggedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
