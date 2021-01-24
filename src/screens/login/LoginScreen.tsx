import styled from '@emotion/native';
import appleAuth from '@invertase/react-native-apple-authentication';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import image from '../../../images/login/bg.png';
import { BaseButton } from '../../components/button/BaseButton';
import { KakaoIcon } from '../../components/icon/KakaoIcon';
import { Logo } from '../../components/logo/Logo';
import { useAuthContext } from '../../contexts/AuthContext';
import { LoginStackParamList } from './LoginNavigation';

type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'LoginScreen'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};
export const LoginScreen: React.FC<Props> = () => {
  const [isSimpleLogin, setIsSimpleLogin] = useState(false);
  const { setLoggedIn } = useAuthContext();
  const handleAppleLogin = async () => {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
  };
  return isSimpleLogin ? (
    <Background source={image}>
      <SafeAreaView>
        <LoginContainer>
          <Logo />
          <LoginText onPress={() => setLoggedIn('hello')}>simple</LoginText>
        </LoginContainer>
      </SafeAreaView>
    </Background>
  ) : (
    <Background source={image}>
      <SafeAreaView>
        <LoginContainer>
          <Logo />
          <LoginButtonContainer>
            <BaseButton
              onPress={() => {
                KakaoLogins.login([KAKAO_AUTH_TYPES.Talk]);
              }}
              backgroundColor="#fdec00"
              icon={<KakaoIcon />}>
              카카오 로그인
            </BaseButton>
            {Platform.OS === 'ios' && (
              <BaseButton onPress={handleAppleLogin} backgroundColor="white" icon={<KakaoIcon />}>
                애플 로그인
              </BaseButton>
            )}
            <BaseButton onPress={() => setIsSimpleLogin(true)}>일반 로그인 및 회원가입</BaseButton>
          </LoginButtonContainer>
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

const LoginButtonContainer = styled.View``;

const LoginText = styled.Text`
  font-size: 20px;
`;
