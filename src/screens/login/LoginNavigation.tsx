import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FindIdNavigation } from './findId/FindIdNaviagtion';
import { FindPasswordNaviagtion } from './findPassword/FindPasswordNaviagtion';
import { LoginScreen } from './LoginScreen';

export type LoginStackParamList = {
  LoginScreen: undefined;
  FindIdNavigation: undefined;
  FindPasswordNaviagtion: undefined;
};
const LoginStack = createStackNavigator<LoginStackParamList>();

export const LoginNavigation = () => {
  return (
    <LoginStack.Navigator initialRouteName="LoginScreen" headerMode="none">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="FindIdNavigation" component={FindIdNavigation} />
      <LoginStack.Screen name="FindPasswordNaviagtion" component={FindPasswordNaviagtion} />
    </LoginStack.Navigator>
  );
};
