import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginScreen } from './LoginScreen';

export type LoginStackParamList = {
  LoginScreen: undefined;
  SimpleLoginScreen: undefined;
};
const LoginStack = createStackNavigator<LoginStackParamList>();

export const LoginNavigation = () => {
  return (
    <LoginStack.Navigator initialRouteName="LoginScreen" headerMode="none">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};
