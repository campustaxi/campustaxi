import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform } from 'react-native';
import Carousel from 'react-native-snap-carousel';
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
import { API_URL } from '../../constant';
import { useAuthContext } from '../../contexts/AuthContext';
import { HomeStackParamList } from '../tab/HomeStackNavigation';

type HomeScreenNavigation = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

type Banner = {
  name: string;
  image: string;
  sort_order: number;
  expiration_at: Date;
};
export const HomeScreen: React.FC = () => {
  const [banner, setBanner] = useState<Banner[]>([]);
  const { navigate } = useNavigation<HomeScreenNavigation>();
  const { token } = useAuthContext();
  const handleClick = (category: string) => () =>
    navigate('CategoryChatListScreen', { categoryName: category });

  useEffect(() => {
    if (token) {
      axios
        .get(`${API_URL}/api/v1/banner/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data.results) {
            setBanner(response.data.results);
            console.log(response.data.results);
          }
        });
    }
  }, [token]);

  return (
    <BlankBackground color="#0d3664">
      <Container>
        <LogoContainer>
          <MainLogo fill="#fff" />
        </LogoContainer>
        <BannerContainer>
          <CarouselContainer>
            <Carousel
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              data={banner}
              renderItem={({ item }: { item: Banner }) => (
                <Banner source={{ uri: item.image ?? '' }} />
              )}
            />
          </CarouselContainer>
        </BannerContainer>
        <MainContainer>
          <CardContainer>
            <Card onPress={handleClick('등교')}>
              <SchoolIcon />
              <CardTitle>등교</CardTitle>
            </Card>
            <Card onPress={handleClick('하교')}>
              <BusIcon />
              <CardTitle>하교</CardTitle>
            </Card>
            <Card onPress={handleClick('야작')}>
              <PencilIcon />
              <CardTitle>야작</CardTitle>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card onPress={handleClick('독서실')}>
              <BookIcon />
              <CardTitle>독서실</CardTitle>
            </Card>
            <Card onPress={handleClick('PC방')}>
              <GameIcon />
              <CardTitle>PC방</CardTitle>
            </Card>
            <Card onPress={handleClick('놀이동산')}>
              <RideIcon />
              <CardTitle>놀이동산</CardTitle>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card onPress={handleClick('클럽')}>
              <ClubIcon />
              <CardTitle>클럽</CardTitle>
            </Card>
            <Card onPress={handleClick('스키')}>
              <SkiIcon />
              <CardTitle>스키</CardTitle>
            </Card>
            <Card onPress={handleClick('오션월드')}>
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
  margin-top: 124px;
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

const CarouselContainer = styled.View`
  margin-top: -24px;
  height: 110px;
  flex: 1;
`;

const Banner = styled.Image`
  height: 110px;
  margin-left: 24px;
  margin-right: 24px;
`;
