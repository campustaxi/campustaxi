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
type HomeScreenNavigationo = NavigationProp<HomeStackParamList, 'ChatRoomScreen'>;

export const CategoryChatListScreen: React.FC = () => {
  const { params } = useRoute<HomeScreenRoute>();
  const { navigate } = useNavigation<HomeScreenNavigationo>();
  const [datas, setDatas] = useState<ChatRoom[]>();
  const { token } = useAuthContext();

  useEffect(() => {
    if (params.categoryName) {
      axios
        .get<APIData>(`${API_URL}/api/v1/rooms/?category=${params.categoryName}`, {
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
    </BlankBackground>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' && '45px'};
`;
