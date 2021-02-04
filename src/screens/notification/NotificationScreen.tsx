import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NotificationMessageIcon } from '../../components/icon/notification/NotificationMessageIcon';
import { NotificationStackParamList } from './NotificationNavigation';

type NotificationScreenNavigationProp = StackNavigationProp<
  NotificationStackParamList,
  'NotificationScreen'
>;

type Props = {
  navigation: NotificationScreenNavigationProp;
};

const datas = [
  {
    title: '새로운 메세지',
    description: '‘하드스틱’님께서 메세지를 보냈습니다.',
    type: 'message',
    time: '오후 12:22',
  },
  {
    title: '친구초대 이벤트',
    description: '친구초대해서 5000원 득템하자!]\n개이득 택시!',
    type: 'message',
    time: '오후 12:22',
  },
  {
    title: '새로운 메세지',
    description: '‘하드스틱’님께서 메세지를 보냈습니다.',
    type: 'message',
    time: '오후 12:22',
  },
  {
    title: '새로운 메세지',
    description: '‘하드스틱’님께서 메세지를 보냈습니다.',
    type: 'message',
    time: '오후 12:22',
  },
  {
    title: '새로운 메세지',
    description: '‘하드스틱’님께서 메세지를 보냈습니다.',
    type: 'message',
    time: '오후 12:22',
  },
  {
    title: '새로운 메세지',
    description: '‘하드스틱’님께서 메세지를 보냈습니다.',
    type: 'message',
    time: '오후 12:22',
  },
  {
    title: '새로운 메세지',
    description: '‘하드스틱’님께서 메세지를 보냈습니다.',
    type: 'message',
    time: '오후 12:22',
  },
  {
    title: '새로운 메세지',
    description: '‘하드스틱’님께서 메세지를 보냈습니다.',
    type: 'message',
    time: '오후 12:22',
  },
  {
    title: '새로운 메세지',
    description: '‘하드스틱’님께서 메세지를 보냈습니다.',
    type: 'message',
    time: '오후 12:22',
  },
];

export const NotificationScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {datas.map((data) => (
          <>
            <Card>
              <CardHeaderContainer>
                <LeftContainer>
                  <NotificationMessageIcon />
                  <Title>{data.title}</Title>
                </LeftContainer>
                <Time>{data.time}</Time>
              </CardHeaderContainer>
              <Description>{data.description}</Description>
            </Card>
            <Line />
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Card = styled.View`
  background-color: #ffffff;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
`;

const CardHeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const LeftContainer = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const Time = styled.Text`
  color: #b6b6bf;
  font-size: 11px;
`;

const Description = styled.Text`
  color: #585864;
  margin-left: 30px;
`;

const Line = styled.View`
  width: 333.6px;
  height: 0;
  border: solid 1px #e5e5e8;
`;
