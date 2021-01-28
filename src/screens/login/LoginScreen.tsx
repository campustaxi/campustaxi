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
export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [isSimpleLogin, setIsSimpleLogin] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
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
      // user is authenticateda
    }
  };
  return isSimpleLogin ? (
    <Background source={image}>
      <Overlay>
        <SafeAreaView>
          <LoginContainer>
            <Logo />
            <LoginContentContainer>
              <LoginInput
                value={id}
                onChangeText={setId}
                placeholder="아이디 입력"
                placeholderTextColor="white"
              />
              <InputBorder />
              <LoginInput
                value={password}
                onChangeText={setPassword}
                placeholder="비밀번호 입력"
                placeholderTextColor="white"
              />
              <InputBorder />
              <FindContainer>
                <FindText onPress={() => navigation.navigate('FindIdNavigation')}>
                  아이디 찾기
                </FindText>
                <InputVerticalBorder />
                <FindText>비밀번호 찾기</FindText>
              </FindContainer>
              <ButtonContainer>
                <BaseButton
                  onPress={() => setLoggedIn('hello')}
                  backgroundColor="rgb(237, 237, 237)">
                  로그인하기
                </BaseButton>
              </ButtonContainer>
              <ButtonContainer>
                <BaseButton onPress={() => setLoggedIn('hello')} color="white">
                  회원가입
                </BaseButton>
              </ButtonContainer>
            </LoginContentContainer>
          </LoginContainer>
        </SafeAreaView>
      </Overlay>
    </Background>
  ) : (
    <Background source={image}>
      <SafeAreaView>
        <LoginContainer>
          <Logo />
          <LoginContentContainer>
            <ButtonContainer>
              <BaseButton
                onPress={() => {
                  KakaoLogins.login([KAKAO_AUTH_TYPES.Talk]);
                }}
                backgroundColor="#fdec00"
                icon={<KakaoIcon />}>
                카카오 로그인
              </BaseButton>
            </ButtonContainer>
            {Platform.OS === 'ios' && (
              <ButtonContainer>
                <BaseButton onPress={handleAppleLogin} backgroundColor="white" icon={<KakaoIcon />}>
                  애플 로그인
                </BaseButton>
              </ButtonContainer>
            )}
            <ButtonContainer>
              <BaseButton onPress={() => setIsSimpleLogin(true)}>
                일반 로그인 및 회원가입
              </BaseButton>
            </ButtonContainer>
          </LoginContentContainer>
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

const LoginContentContainer = styled.View`
  align-items: center;
`;

const LoginInput = styled.TextInput`
  height: 20px;
  margin-bottom: 16px;
  color: white;
  font-size: 18px;
`;

const InputBorder = styled.View`
  width: 211px;
  border: 1px solid #f0f0f0;
  margin-bottom: 36px;
`;

const InputVerticalBorder = styled.View`
  height: 12px;
  border: 1px solid #f0f0f0;
  margin-left: 16px;
  margin-right: 16px;
`;

const ButtonContainer = styled.View`
  margin-bottom: 8px;
`;

const FindContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const FindText = styled.Text`
  color: white;
`;

const Overlay = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.47);
  opacity: 0.8;
`;
