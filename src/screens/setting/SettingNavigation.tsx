import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SettingScreen } from './SettingScreen';

export type SettingStackParamList = {
  SettingScreen: undefined;
};
const SettingStack = createStackNavigator<SettingStackParamList>();

export const SettingNavigation = () => {
  return (
    <SettingStack.Navigator initialRouteName="SettingScreen" headerMode="none">
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
    </SettingStack.Navigator>
  );
};
