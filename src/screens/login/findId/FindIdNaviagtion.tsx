import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FindIdScreen } from './FindIdScreen';
import { FoundScreen } from './FoundScreen';

export type FindIdStackParamList = {
  FindIdScreen: undefined;
  FoundScreen: { id: string };
};
const FindIdStack = createStackNavigator<FindIdStackParamList>();

export const FindIdNavigation: React.FC = () => {
  return (
    <FindIdStack.Navigator initialRouteName="FindIdScreen">
      <FindIdStack.Screen
        name="FindIdScreen"
        component={FindIdScreen}
        options={{ title: '아이디 찾기' }}
      />
      <FindIdStack.Screen
        name="FoundScreen"
        component={FoundScreen}
        options={{ title: '아이디 찾기 결과' }}
      />
    </FindIdStack.Navigator>
  );
};
