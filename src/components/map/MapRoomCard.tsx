import styled from '@emotion/native';
import React from 'react';
import { Text } from 'react-native';
import { ChatRoom } from '../chat-room/ChatRoomList';

type Props = {
  data: ChatRoom;
  onPress: () => void;
  backgroundColor?: string;
  gender?: string;
};
export const MapRoomCard: React.FC<Props> = ({ data, onPress, backgroundColor, gender }) => {
  const bgColor = ((gender == 'man') ? '#579FEE' : ((gender == 'woman') ? '#FF6464' : '#000000'));
  const genderText = ((gender == 'man') ? '남자' : ((gender == 'woman') ? '여자' : '무관'));
  return (
    <DataContainer onPress={onPress}>
      <Card style={{ backgroundColor: backgroundColor ? backgroundColor : 'white' }}>
        <TempCircle style={{ backgroundColor: bgColor}}>
          <CircleText>{genderText}</CircleText>
        </TempCircle>
        <CardContainer>
          <CardHeaderContainer>
            <LeftContainer>
              <Time>{data.time}</Time>
              <TitleView>
              <Title>{data.title}</Title>
              <TitleVip>VIP</TitleVip>
              </TitleView>
            </LeftContainer>
          </CardHeaderContainer>
          <CardBodyContainer>
            <TextContainer>
              <TextArea>출발지 - {data.startLocation}</TextArea>
              <TextArea>도착지 - {data.arriveLocation}</TextArea>
            </TextContainer>
            <RightContainer>
              <Count>
                {data.currentCount}명/{data.maxCount}명
              </Count>
            </RightContainer>
          </CardBodyContainer>
        </CardContainer>
      </Card>
    </DataContainer>
  );
};

const DataContainer = styled.TouchableOpacity`
  height: 115px;
`;

const Card = styled.View`
  flex-direction: row;
  padding: 8px 8px 8px 9px;
  margin: 0 8px 18px 9px;
  border-radius: 19px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

const TempCircle = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 17px;
  background-color: #ff6464;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  margin-right: 16px;
  margin-top: 20px;
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
  margin-top:-1px;
`;

const TitleView = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top:3px;
`;
const Title = styled.Text`
  font-size: 13px;
  font-weight: bold;
  `;
const TitleVip = styled.Text`
  font-size: 9px;
  font-weight: bold;
  background-color: #fff780;
  height: 18px;
  padding: 2px 7px 2px 7px;
  margin-left: 17px;
  text-align: center;
  border-radius: 25px;
`;

const RightContainer = styled.View`

`;

const Count = styled.Text`
  color: #343434;
  font-size: 11px;
  font-weight: bold;
  opacity: 0.59;
`;

const Time = styled.Text`
  font-size: 8px;
  width: 60px;
  font-weight: bold;
  padding: 3px 8px 3px 8px;
  border-radius: 7px;
  border: solid 1px #707070;
  background-color: #ffffff;
  text-align:center;
`;

const CardBodyContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TextContainer = styled.View`
margin-bottom:0px;
`;

const TextArea = styled.Text`
  font-size: 11px;
  margin-bottom: 3px;
`;