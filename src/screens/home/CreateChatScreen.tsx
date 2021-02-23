import styled from '@emotion/native';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import NaverMapView, { Coord, Marker } from 'react-native-nmap';
import { BottomButton } from '../../components/button/BottomButton';
import { BlankBackground } from '../../components/layout/BlankBackground';

export const CreateChatScreen: React.FC = () => {
  const [gender, setGender] = useState<number>();
  const [isMapView, setIsMapView] = useState(false);
  const [coordinate, setCoordinate] = useState<Coord>();
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    }
    Geolocation.getCurrentPosition(
      (position) => {
        setCoordinate({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, []);
  if (!coordinate) {
    return null;
  }
  if (isMapView) {
    return (
      <Container>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          onCameraChange={({ latitude, longitude }) => {
            setCoordinate({ latitude, longitude });
          }}
          showsMyLocationButton>
          <Marker coordinate={coordinate} onClick={() => console.warn('onClick! p0')} />
        </NaverMapView>
        <BottomButton onPress={() => {}}>선택하기</BottomButton>
      </Container>
    );
  }
  return (
    <BlankBackground color="#fff">
      <Container>
        <ContentContainer>
          <FormDescription>출발장소</FormDescription>
          <FormSelect>
            <SelectItem
              active={true}
              onPress={() => {
                setIsMapView(true);
              }}>
              <WhiteText>지도에서 선택하기</WhiteText>
            </SelectItem>
          </FormSelect>
          <FormDescription>도착장소</FormDescription>
          <FormSelect>
            <SelectItem
              active={true}
              onPress={() => {
                setIsMapView(true);
              }}>
              <WhiteText>지도에서 선택하기</WhiteText>
            </SelectItem>
          </FormSelect>
          <FormDescription>탑승시간</FormDescription>
          <FormSelect>
            <SelectItem
              active={gender === 1}
              onPress={() => {
                setGender(1);
              }}>
              <WhiteText>남자</WhiteText>
            </SelectItem>
            <SelectItem
              active={gender === 2}
              onPress={() => {
                setGender(2);
              }}>
              <WhiteText>여자</WhiteText>
            </SelectItem>
          </FormSelect>
          <FormDescription>탑승 인원</FormDescription>
          <FormSelect>
            <SelectItem
              active={gender === 1}
              onPress={() => {
                setGender(1);
              }}>
              <WhiteText>남자</WhiteText>
            </SelectItem>
            <SelectItem
              active={gender === 2}
              onPress={() => {
                setGender(2);
              }}>
              <WhiteText>여자</WhiteText>
            </SelectItem>
          </FormSelect>
          <FormDescription>탑승 성별</FormDescription>
          <FormSelect>
            <SelectItem
              active={gender === 1}
              onPress={() => {
                setGender(1);
              }}>
              <WhiteText>남자</WhiteText>
            </SelectItem>
            <SelectItem
              active={gender === 2}
              onPress={() => {
                setGender(2);
              }}>
              <WhiteText>여자</WhiteText>
            </SelectItem>
          </FormSelect>
        </ContentContainer>
      </Container>
    </BlankBackground>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' && '45px'};
`;

const ContentContainer = styled.View`
  margin: 24px;
`;
const FormDescription = styled.Text`
  color: #7d849b;
  font-size: 11px;
`;

const FormSelect = styled.View`
  flex-direction: row;
  margin-top: 16px;
  justify-content: center;
`;

const SelectItem = styled.TouchableOpacity<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#f8bd3c' : '#cbced7')};
  padding: 4px 36px;
  border-radius: 19px;
  margin-right: 8px;
`;

const WhiteText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
