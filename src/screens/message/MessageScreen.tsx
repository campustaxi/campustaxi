import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ChatRoom, ChatRoomList } from '../../components/chat-room/ChatRoomList';
import { API_URL } from '../../constant';
import { useAuthContext } from '../../contexts/AuthContext';
import { MessageStackParamList } from './MessageNavigation';

type MessageNavigation = StackNavigationProp<MessageStackParamList, 'MessageScreen'>;

const Gender = ['여자', '남자'];
type APIData = {
  meeting_dtm: Date;
  gender: number;
  person_maximum: number;
  person_current: number;
  room_type: string;
  owner: boolean;
  member: number[];
};

export const MessageScreen: React.FC = () => {
  const [datas, setDatas] = useState<ChatRoom[]>();
  const { token } = useAuthContext();
  const navigation = useNavigation<MessageNavigation>();

  useEffect(() => {
    axios
      .get<APIData[]>(`${API_URL}/api/v1/rooms/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.map((item) => ({
          id: 1,
          gender: Gender[item.gender] ?? '남 여',
          title: 'title',
          currentCount: item.person_current,
          maxCount: item.person_maximum,
          time: format(new Date(item.meeting_dtm), 'HH:MM'),
          startLocation: '1',
          arriveLocation: '2',
          unreadMessage: '300+',
        }));
        setDatas(data);
      });
  }, [token]);

  if (!datas || datas.length <= 0) {
    return <></>;
  }

  return (
    <Container>
      <ScrollView>
        <ChatRoomList
          datas={datas}
          onPress={(id: number) => () => {
            navigation.navigate('ChatRoomScreen', { id });
          }}
        />
      </ScrollView>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
`;
