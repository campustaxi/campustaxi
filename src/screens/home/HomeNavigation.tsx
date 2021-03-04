import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from './HomeScreen';
import {CreateScreen} from './CreateScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
};
const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen" headerMode="none">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="CreateScreen" component={CreateScreen} />
    </HomeStack.Navigator>
  );
};
