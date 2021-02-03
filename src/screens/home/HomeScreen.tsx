import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { BlankBackground } from '../../components/layout/BlankBackground';
import { MainLogo } from '../../components/logo/MainLogo';
import { useAuthContext } from '../../contexts/AuthContext';
import { HomeStackParamList } from './HomeNavigation';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
export const HomeScreen: React.FC<Props> = () => {
  const { setLoggedOut } = useAuthContext();
  return (
    <BlankBackground color="#0d3664">
      <SafeAreaView>
        <LogoContainer>
          <MainLogo fill="#fff" />
        </LogoContainer>
        <MainContainer>
          <Text
            onPress={() => {
              setLoggedOut();
            }}>
            home
          </Text>
        </MainContainer>
      </SafeAreaView>
    </BlankBackground>
  );
};

const LogoContainer = styled.View`
  align-items: center;
`;

const MainContainer = styled.View`
  background-color: #eaeaea;
  padding-top: 6px;
  padding-left: 16px;
`;
