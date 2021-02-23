import styled from '@emotion/native';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { ChatRoom, ChatRoomList } from '../../components/chat-room/ChatRoomList';
import { BlankBackground } from '../../components/layout/BlankBackground';
import { API_URL } from '../../constant';
import { useAuthContext } from '../../contexts/AuthContext';
import { APIData, Gender } from '../message/MessageScreen';
import { HomeStackParamList } from './HomeNavigation';

type HomeScreenRoute = RouteProp<HomeStackParamList, 'CategoryChatListScreen'>;
type HomeScreenNavigationo = NavigationProp<HomeStackParamList, 'CategoryChatListScreen'>;

export const CategoryChatListScreen: React.FC = () => {
  const { params } = useRoute<HomeScreenRoute>();
  const { navigate } = useNavigation<HomeScreenNavigationo>();
  const [datas, setDatas] = useState<ChatRoom[]>();
  const { token } = useAuthContext();

  const handleCreateChat = () => navigate('CreateChatScreen');

  useEffect(() => {
    if (params.categoryName) {
      axios
        .get<APIData>(`${API_URL}/api/v1/rooms/?category=1`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data.results.map((item) => ({
            id: 1,
            gender: Gender[item.gender] ?? '남 여',
            title: 'title',
            currentCount: item.current,
            maxCount: item.personnel_limit,
            time: format(new Date(item.boarding_dtm), 'HH:MM'),
            startLocation: item.start_address,
            arriveLocation: item.end_address,
            unreadMessage: '300+',
          }));
          setDatas(data);
        });
    }
  }, [params.categoryName, token]);

  if (!datas || datas.length <= 0) {
    return <></>;
  }
  return (
    <BlankBackground color="#fff">
      <Container>
        <ChatRoomList
          datas={datas}
          onPress={(id: number) => () => {
            navigate('ChatRoomScreen', { id });
          }}
        />
      </Container>
      <CreateButton onPress={handleCreateChat}>
        <PlusIcon>+</PlusIcon>
        <ButtonText>방만들기</ButtonText>
      </CreateButton>
    </BlankBackground>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' && '45px'};
`;

const CreateButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #f8b73c;
  border-radius: 40px;
`;

const PlusIcon = styled.Text`
  margin-top: -16px;
  color: white;
  font-size: 48px;
`;

const ButtonText = styled.Text`
  color: white;
`;
