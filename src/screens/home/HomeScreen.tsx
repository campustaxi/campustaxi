import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, Button, ScrollView, Text, TouchableOpacity } from 'react-native';
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
import { Search } from '../../components/icon/home/Search';
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
            <MyCampusInfo>
              <UserCampusInfo>택시 대학교 [서울]</UserCampusInfo>
            </MyCampusInfo>

            <MiniIconContainer>
              <MiniIconTouchable>

                <Text style={{color : 'white'}}>학교 홈</Text>
              </MiniIconTouchable>
              <MiniIconTouchable>

                <Text style={{color : 'white'}}>E-Class</Text>
              </MiniIconTouchable>
            </MiniIconContainer>


          </LogoContainer>

          <ScrollView>
            <MainContainer>
              <SubContainer>
                <SubTitleView>
                  <SubTitle>카테고리</SubTitle>
                </SubTitleView>
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
                <SubTitleView>
                  <SubTitle>인원</SubTitle>
                </SubTitleView>
                <OptionButton options={["2", "3", "4"]} height={21} width={21}/>
              </SubContainer>

              <SubContainer>
                <SubTitleView>
                  <SubTitle>탑승 성별</SubTitle>
                </SubTitleView>
                <OptionButton options={["동성만", "무관"]} height={28} width={58}/>
              </SubContainer>

              <SubContainer>
                <SubTitleView>
                  <SubTitle>검색</SubTitle>
                </SubTitleView>
                <SearchView>
                  <TextField placeholder={"출발지점을 입력해주세요"} centered={true}/>
                  <TouchableOpacity><Search/></TouchableOpacity>
                </SearchView>
                <SearchView>
                  <TextField placeholder={"도착지점을 입력해주세요"} centered={true}/>
                  <TouchableOpacity><Search/></TouchableOpacity>
                </SearchView>
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

const SearchView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
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
  height: 101px;
  width: 102px;
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

const MiniIconContainer = styled.View`
  flex-direction: row;
  margin-top: 10;
`;

const MiniIconTouchable = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5;
  margin-left: 5;
`;

const SubTitleView = styled.View`
  flex: 1;
  height: 21px;
  width: 88px;
  color: #5F88CD;
  justify-content: center;
  align-items: center;
  border-width: 1.5px;
  border-color: #76A2EB;
  border-radius: 6px;
  background-color: white;
  font-size: 11px;
  margin-top: 25px;
  margin-bottom: 15px;
`;

const SubTitle = styled.Text`
  color: #5F88CD;
  text-align: center;
  font-size: 11px;
`;

const UserCampusInfo = styled.Text`
  color: #F4F4F4;
  text-align: center;
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
