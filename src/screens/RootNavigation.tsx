import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeTabNavigation } from './tab/HomeTabNavigation';

type RootStackParamList = {
  HomeTabNavigation: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();
export const RootNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeTabNavigation">
      <RootStack.Screen name="HomeTabNavigation" component={HomeTabNavigation} />
    </RootStack.Navigator>
  );
};
