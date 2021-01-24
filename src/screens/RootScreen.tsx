import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { LoginNavigation } from './login/LoginNavigation';
import { HomeTabNavigation } from './tab/HomeTabNavigation';

export const RootScreen = () => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <HomeTabNavigation /> : <LoginNavigation />;
};
