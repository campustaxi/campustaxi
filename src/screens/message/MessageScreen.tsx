import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
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

type Data = {
  id: number;
  gender: string;
  title: string;
  currentCount: number;
  maxCount: number;
  time: string;
  startLocation: string;
  arriveLocation: string;
  unreadMessage: string;
};

export const MessageScreen: React.FC = () => {
  const [datas, setDatas] = useState<Data[]>();
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
        {datas.map((data) => (
          <DataContainer
            key={data.id}
            onPress={() => {
              navigation.navigate('ChatRoomScreen');
            }}>
            <Card>
              <TempCircle>
                <CircleText>NO.{data.id}</CircleText>
                <CircleText>{data.gender}</CircleText>
              </TempCircle>
              <CardContainer>
                <CardHeaderContainer>
                  <LeftContainer>
                    <Title>{data.title}</Title>
                  </LeftContainer>
                  <RightContainer>
                    <Count>
                      {data.currentCount}/{data.maxCount}
                    </Count>
                    <Time>{data.time}</Time>
                  </RightContainer>
                </CardHeaderContainer>
                <CardBodyContainer>
                  <TextContainer>
                    <Text>{data.startLocation}</Text>
                    <Text>{data.arriveLocation}</Text>
                  </TextContainer>
                  <MessageBadge>
                    <BadgeText>{data.unreadMessage}</BadgeText>
                  </MessageBadge>
                </CardBodyContainer>
              </CardContainer>
            </Card>
            <Line />
          </DataContainer>
        ))}
      </ScrollView>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
`;

const DataContainer = styled.TouchableOpacity``;

const Card = styled.View`
  flex-direction: row;
  background-color: #ffffff;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
`;

const Line = styled.View`
  width: 100%;
  height: 0;
  border: solid 1px #e5e5e8;
`;

const TempCircle = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 31px;
  background-color: #ff6464;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  margin-right: 16px;
`;

const CircleText = styled.Text`
  color: white;
  text-align: center;
`;

const CardContainer = styled.View`
  flex: 1;
`;

const CardHeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const RightContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Count = styled.Text`
  color: #b7b7bb;
  font-size: 15px;
  font-weight: bold;
`;

const Time = styled.Text`
  font-size: 13px;
  font-weight: 300;
  margin-left: 16px;
`;

const CardBodyContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TextContainer = styled.View``;

const MessageBadge = styled.View`
  border-radius: 14px;
  background-color: #f8843c;
  padding: 8px 12px;
`;

const BadgeText = styled.Text`
  color: white;
`;
