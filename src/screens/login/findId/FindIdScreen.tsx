import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { SimpleButton } from '../../../components/button/SimpleButton';
import { BlankBackground } from '../../../components/layout/BlankBackground';
import { FindIdStackParamList } from './FindIdNaviagtion';

type FindIdNavigation = StackNavigationProp<FindIdStackParamList, 'FindIdScreen'>;

enum FindMethod {
  PHONE = 'phone',
}

export const FindIdScreen: React.FC = ({}) => {
  const { navigate } = useNavigation<FindIdNavigation>();
  const [method, setMethod] = useState<FindMethod>();
  const [name, setName] = useState('');
  const [phoneCountry, setPhoneCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState('');
  console.log(phoneCountry, phone, code);

  return (
    <BlankBackground>
      <SafeAreaView>
        <Container>
          <Title>아이디 찾는 방법을 선택해 주세요.</Title>
          <RadioContainer>
            <RadioForm formHorizontal={true} animation={true}>
              <RadioButton labelHorizontal={true}>
                <RadioButtonInput
                  obj={{ label: '휴대전화로 인증', value: FindMethod.PHONE }}
                  index={0}
                  isSelected={method === FindMethod.PHONE}
                  onPress={() => {
                    setMethod(FindMethod.PHONE);
                  }}
                  buttonInnerColor={'#707070'}
                  buttonOuterColor={method === FindMethod.PHONE ? '#707070' : '#707070'}
                  buttonSize={12}
                  buttonOuterSize={24}
                />
                <RadioButtonLabel
                  obj={{ label: '휴대전화로 인증', value: FindMethod.PHONE }}
                  index={0}
                  labelHorizontal={true}
                  onPress={() => {
                    setMethod(FindMethod.PHONE);
                  }}
                />
              </RadioButton>
            </RadioForm>
            {method === FindMethod.PHONE && (
              <Description>
                회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야, 인증번호를 받을 수
                있습니다.
              </Description>
            )}
            <RadioLine />
            {method === FindMethod.PHONE && (
              <>
                <FindInput
                  value={name}
                  onChangeText={setName}
                  placeholder="이름(본명)"
                  placeholderTextColor="#b0b0b2"
                />
                <PhoneContainer>
                  <RNPickerSelect
                    style={{
                      inputAndroidContainer: PickerContainer,
                      inputIOSContainer: PickerContainer,
                      viewContainer: PickerViewContainer,
                    }}
                    onValueChange={(value) => setPhoneCountry(value)}
                    items={[{ label: '+82', value: '+82' }]}
                    value={phoneCountry}
                    placeholder={{ label: '선택', value: '0' }}
                  />
                  <PhoneNumber
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="휴대폰 번호"
                    placeholderTextColor="#b0b0b2"
                    keyboardType="phone-pad"
                  />
                </PhoneContainer>
                <SimpleButton
                  onPress={() => {
                    setSent(true);
                  }}
                  clicked={sent}>
                  {sent ? '재전송하기' : '인증번호 전송하기'}
                </SimpleButton>
                {sent && (
                  <SentContainer>
                    <FindInput
                      value={code}
                      onChangeText={setCode}
                      maxLength={6}
                      placeholder="인증번호 숫자 6자리"
                      placeholderTextColor="#b0b0b2"
                      keyboardType="numeric"
                    />
                    <Description>인증번호가 오지 않나요?</Description>
                    <SimpleButton
                      onPress={() => {
                        navigate('FoundScreen', {
                          id: 'hw6110',
                        });
                      }}>
                      확인
                    </SimpleButton>
                  </SentContainer>
                )}
              </>
            )}
          </RadioContainer>
        </Container>
      </SafeAreaView>
    </BlankBackground>
  );
};

const Container = styled.View`
  margin-left: 64px;
  margin-right: 64px;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 96px;
`;

const Description = styled.Text`
  color: #7d849b;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 12px;
`;

const RadioLine = styled.View`
  width: 300px;
  margin-bottom: 12px;
  border: 1px solid #e5e5e8;
`;

const RadioContainer = styled.View``;

const FindInput = styled.TextInput`
  padding: 8px;
  border: 2px solid rgba(149, 149, 149, 0.09);
  border-radius: 8px;
  margin-bottom: 12px;
`;

const PhoneContainer = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

const PhoneNumber = styled.TextInput`
  flex: 3;
  padding: 8px;
  border: 2px solid rgba(149, 149, 149, 0.09);
  border-radius: 8px;
`;

const PickerViewContainer = css`
  flex: 1;
`;
const PickerContainer = css`
  padding: 8px;
  border-radius: 8px;
  border: 2px solid rgba(149, 149, 149, 0.09);
`;

const SentContainer = styled.View`
  margin-top: 24px;
`;
