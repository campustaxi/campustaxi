import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { MessageNavigation } from '../message/MessageNavigation';

export const MessageTabScreen = () => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#fff');
      StatusBar.setBarStyle('dark-content');
    }
  }, [isFocused]);

  return <MessageNavigation />;
};
