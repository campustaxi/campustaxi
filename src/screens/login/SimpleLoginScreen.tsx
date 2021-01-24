import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import image from '../../../images/login/bg.png';
import { Logo } from '../../components/logo/Logo';
import { LoginStackParamList } from './LoginNavigation';

type SimpleLoginScreenNavigationProp = StackNavigationProp<
  LoginStackParamList,
  'SimpleLoginScreen'
>;

type Props = {
  navigation: SimpleLoginScreenNavigationProp;
};
export const SimpleLoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Background source={image}>
      <SafeAreaView>
        <LoginContainer>
          <Logo />
          <LoginText onPress={() => navigation.navigate('LoginScreen')}>simple</LoginText>
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
