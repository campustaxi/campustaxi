import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { HomeNavigation } from '../home/HomeNavigation';

export const HomeTabScreen = () => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#0d3664');
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  return <HomeNavigation />;
};
