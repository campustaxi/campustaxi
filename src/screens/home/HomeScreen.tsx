import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, Button, ScrollView } from 'react-native';
import { OptionButton } from '../../components/button/OptionButton';
import { TextField } from '../../components/form/TextField';
import { BookIcon } from '../../components/icon/home/BookIcon';
import { BusIcon } from '../../components/icon/home/BusIcon';
import { ClubIcon } from '../../components/icon/home/ClubIcon';
import { GameIcon } from '../../components/icon/home/GameIcon';
import { PencilIcon } from '../../components/icon/home/PencilIcon';
import { PoolIcon } from '../../components/icon/home/PoolIcon';
import { RideIcon } from '../../components/icon/home/RideIcon';
import { EtcIcon } from '../../components/icon/home/EtcIcon';
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
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  return (
      <BlankBackground color="#76A2EB">
        <Container>
          <LogoContainer>
            <MainLogo fill="#fff" />
          </LogoContainer>
          <MyCampusInfo>

          </MyCampusInfo>

          <BannerContainer>
            <TempImage />
          </BannerContainer>
          <ScrollView>
            <MainContainer>
              <SubContainer>
                <SubTitle>카테고리</SubTitle>
                <CardContainer>
                  <Card>
                    <SchoolIcon />
                    <CardTitle>등교</CardTitle>
                  </Card>
                  <Card>
                    <BusIcon />
                    <CardTitle>하교</CardTitle>
                  </Card>
                  <Card>
                    <EtcIcon />
                    <CardTitle>기타</CardTitle>
                  </Card>
                </CardContainer>
              </SubContainer>

              <SubContainer>
                <SubTitle>인원</SubTitle>
                <OptionButton options={["2", "3", "4"]}/>
              </SubContainer>

              <SubContainer>
                <SubTitle>탑승 성별</SubTitle>
                <OptionButton options={["동성만", "무관"]}/>
              </SubContainer>

              <SubContainer>
                <SubTitle>검색</SubTitle>
                <TextField placeholder={"출발지를 검색하세요"}/>
                <TextField placeholder={"도착지를 검색하세요"}/>
              </SubContainer>

              <Button onPress={() => navigate("CreateScreen")} color="#76A2EB" title="방 검색하기"/>
            </MainContainer>
          </ScrollView>
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
  background-color: #76A2EB;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: #F2F2F2;
  padding-top: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
`;

const BannerContainer = styled.View`
  height: 110px;
  background-color: #F2F2F2;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 124px;
`;

const SubContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const CardContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Card = styled.TouchableOpacity`
  ${Platform.OS === 'android' && 'elevation: 6;'}
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

const SubTitle = styled.Text`
  flex: 1;
  height: 21px;
  width: 88px;
  color: #5F88CD;
  text-align: center;
  border-radius: 6px;
  background-color: white;
  font-size: 11px;
`;

const TempImage = styled.View`
  margin-top: -24px;
  height: 110px;
  background-color: red;
`;

const MyCampusInfo = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.13);
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.83);
  border-top-left-radius: 108;
  border-top-right-radius: 108;
  border-bottom-left-radius: 108;
  border-bottom-right-radius: 108;
`;
