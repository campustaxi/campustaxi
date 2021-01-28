import styled from '@emotion/native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlankBackground } from '../../../components/layout/BlankBackground';
import { FindIdStackParamList } from './FindIdNaviagtion';

type FoundScreenRouteProp = RouteProp<FindIdStackParamList, 'FoundScreen'>;
type FoundScreenNavigationProp = StackNavigationProp<FindIdStackParamList, 'FoundScreen'>;

type Props = {
  route: FoundScreenRouteProp;
  navigation: FoundScreenNavigationProp;
};
export const FoundScreen: React.FC<Props> = ({ route }) => {
  return (
    <BlankBackground>
      <SafeAreaView>
        <Container>
          <Text>회원님의 아이디는</Text>
          <Result>{route.params.id}</Result>
          <Text>입니다</Text>
        </Container>
      </SafeAreaView>
    </BlankBackground>
  );
};

const Container = styled.View`
  margin-top: 96px;
  align-items: center;
`;

const Result = styled.Text`
  width: 70%;
  text-align: center;
  padding: 8px;
  border: 2px solid rgba(149, 149, 149, 0.09);
`;
