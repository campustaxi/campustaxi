import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from './HomeScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
};
const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen" headerMode="none">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
