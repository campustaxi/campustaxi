import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BackIcon } from '../../components/icon/BackIcon';
import { FindIdScreen } from './findId/FindIdScreen';
import { FoundScreen } from './findId/FoundScreen';
import { FindPasswordScreen } from './findPassword/FindPasswordScreen';
import { ResetScreen } from './findPassword/ResetScreen';
import { LoginScreen } from './LoginScreen';
import { AgreeScreen } from './register/AgreeScreen';
import { RegisterScreen } from './register/RegisterScreen';

export type LoginStackParamList = {
  LoginScreen: undefined;
  AgreeScreen: undefined;
  RegisterScreen: undefined;
  FindPasswordScreen: undefined;
  ResetScreen: undefined;
  FindIdScreen: undefined;
  FoundScreen: { id: string };
};
const LoginStack = createStackNavigator<LoginStackParamList>();

export const LoginNavigation = () => {
  return (
    <LoginStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerLeft: ({ onPress }) => <BackIcon onPress={onPress} />,
      }}>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="AgreeScreen"
        component={AgreeScreen}
        options={{ title: '이용동의' }}
      />
      <LoginStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: '회원가입' }}
      />
      <LoginStack.Screen
        name="FindPasswordScreen"
        component={FindPasswordScreen}
        options={{ title: '비밀번호 찾기' }}
      />
      <LoginStack.Screen
        name="ResetScreen"
        component={ResetScreen}
        options={{ title: '비밀번호 재설정' }}
      />
      <LoginStack.Screen
        name="FindIdScreen"
        component={FindIdScreen}
        options={{ title: '아이디 찾기' }}
      />
      <LoginStack.Screen
        name="FoundScreen"
        component={FoundScreen}
        options={{ title: '아이디 찾기 결과' }}
      />
    </LoginStack.Navigator>
  );
};
