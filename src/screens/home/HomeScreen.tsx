import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { BookIcon } from '../../components/icon/home/BookIcon';
import { BusIcon } from '../../components/icon/home/BusIcon';
import { ClubIcon } from '../../components/icon/home/ClubIcon';
import { GameIcon } from '../../components/icon/home/GameIcon';
import { PencilIcon } from '../../components/icon/home/PencilIcon';
import { PoolIcon } from '../../components/icon/home/PoolIcon';
import { RideIcon } from '../../components/icon/home/RideIcon';
import { SchoolIcon } from '../../components/icon/home/SchoolIcon';
import { SkiIcon } from '../../components/icon/home/SkiIcon';
import { BlankBackground } from '../../components/layout/BlankBackground';
import { MainLogo } from '../../components/logo/MainLogo';
import { HomeStackParamList } from './HomeNavigation';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
export const HomeScreen: React.FC<Props> = () => {
  return (
    <BlankBackground color="#0d3664">
      <Container>
        <LogoContainer>
          <MainLogo fill="#fff" />
        </LogoContainer>
        <BannerContainer>
          <TempImage />
        </BannerContainer>
        <MainContainer>
          <CardContainer>
            <Card>
              <SchoolIcon />
              <CardTitle>둥교</CardTitle>
            </Card>
            <Card>
              <BusIcon />
              <CardTitle>하교</CardTitle>
            </Card>
            <Card>
              <PencilIcon />
              <CardTitle>야작</CardTitle>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <BookIcon />
              <CardTitle>독서실</CardTitle>
            </Card>
            <Card>
              <GameIcon />
              <CardTitle>PC방</CardTitle>
            </Card>
            <Card>
              <RideIcon />
              <CardTitle>놀이동산</CardTitle>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <ClubIcon />
              <CardTitle>클럽</CardTitle>
            </Card>
            <Card>
              <SkiIcon />
              <CardTitle>스키</CardTitle>
            </Card>
            <Card>
              <PoolIcon />
              <CardTitle>오션월드</CardTitle>
            </Card>
          </CardContainer>
        </MainContainer>
      </Container>
    </BlankBackground>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' && '45px'};
`;

const LogoContainer = styled.View`
  align-items: center;
  background-color: #0d3664;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: #eaeaea;
  padding-top: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
`;

const BannerContainer = styled.View`
  height: 110px;
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 124px;
`;

const CardContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Card = styled.TouchableOpacity`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

const CardTitle = styled.Text`
  text-align: center;
  margin-top: 16px;
`;

const TempImage = styled.View`
  margin-top: -24px;
  height: 110px;
  background-color: red;
`;
