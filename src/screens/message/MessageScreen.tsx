import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { MessageStackParamList } from './MessageNavigation';

type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'MessageScreen'>;

type Props = {
  navigation: MessageScreenNavigationProp;
};

const datas = [
  {
    id: 1,
    gender: '남자',
    title: '여자천하',
    currentCount: 3,
    maxCount: 4,
    time: '12:22',
    startLocation: '출발지 - 경기도 용인시 (14:00 탑승)',
    arriveLocation: '도착지 - 경기도 수원시 권선구',
    unreadMessage: '300+',
  },
];

export const MessageScreen: React.FC<Props> = () => {
  return (
    <Container>
      <ScrollView>
        {datas.map((data) => (
          <DataContainer key={data.id}>
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

const DataContainer = styled.View``;

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
