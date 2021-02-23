import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { LoginNavigation } from './login/LoginNavigation';
import { HomeStackNavigation } from './tab/HomeStackNavigation';

export const RootScreen = () => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <HomeStackNavigation /> : <LoginNavigation />;
};
