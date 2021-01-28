import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FindPasswordScreen } from './FindPasswordScreen';
import { ResetScreen } from './ResetScreen';

export type FindPasswordStackParamList = {
  FindPasswordScreen: undefined;
  ResetScreen: undefined;
};
const FindPasswordStack = createStackNavigator<FindPasswordStackParamList>();

export const FindPasswordNaviagtion: React.FC = () => {
  return (
    <FindPasswordStack.Navigator initialRouteName="FindPasswordScreen">
      <FindPasswordStack.Screen
        name="FindPasswordScreen"
        component={FindPasswordScreen}
        options={{ title: '비밀번호 찾기' }}
      />
      <FindPasswordStack.Screen
        name="ResetScreen"
        component={ResetScreen}
        options={{ title: '비밀번호 재설정' }}
      />
    </FindPasswordStack.Navigator>
  );
};
