import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { API_URL } from '../../constant';
import { useAuthContext } from '../../contexts/AuthContext';
import { MessageStackParamList } from './MessageNavigation';

type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'MessageScreen'>;

type Props = {
  navigation: MessageScreenNavigationProp;
};

type Message = {
  message: string;
  message_type: 'Message' | 'Notice' | 'Enter';
  writer: number;
  room: number;
  created_at: Date;
  updated_at: Date;
};

export const ChatRoomScreen: React.FC<Props> = () => {
  const [datas, setDatas] = useState<Message[]>();
  const { token } = useAuthContext();

  useEffect(() => {
    axios
      .get<Message[]>(`${API_URL}/api/v1/messages/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setDatas(response.data);
      });
  }, [token]);

  if (!datas || datas.length <= 0) {
    return <></>;
  }

  return (
    <Container>
      {datas.map((data) => (
        <Text>{data.message}</Text>
      ))}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;
