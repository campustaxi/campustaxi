import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import image from '../../../images/login/bg.png';
import { Logo } from '../../components/logo/Logo';
import { LoginStackParamList } from './LoginNavigation';

type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'LoginScreen'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};
export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Background source={image}>
      <SafeAreaView>
        <LoginContainer>
          <Logo />
          <LoginText onPress={() => navigation.navigate('SimpleLoginScreen')}>
            일반 로그인 및 회원가입
          </LoginText>
        </LoginContainer>
      </SafeAreaView>
    </Background>
  );
};

const Background = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

const LoginContainer = styled.View`
  margin-top: 120px;
  margin-bottom: 64px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const LoginText = styled.Text`
  font-size: 20px;
`;
