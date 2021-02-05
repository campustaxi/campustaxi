import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NotificationNavigation } from '../notification/NotificationNavigation';

export const NotificationTabScreen = () => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#fff');
      StatusBar.setBarStyle('dark-content');
    }
  }, [isFocused]);

  return <NotificationNavigation />;
};
