import styled from '@emotion/native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { BottomButton } from '../../../components/button/BottomButton';
import { SimpleCheckBox } from '../../../components/checkbox/SimpleCheckBox';
import { PhoneVerification } from '../../../components/form/PhoneVerification';
import { LoginStackParamList } from '../LoginNavigation';

type LoginNavigation = NavigationProp<LoginStackParamList, 'RegisterScreen'>;

export const RegisterScreen: React.FC = ({}) => {
  const [code, setCode] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ContentContainer>
          <SectionContainer>
            <CheckboxContainer>
              <SimpleCheckBox value={Boolean(code)} disabled />
              <Content>휴대폰 인증</Content>
            </CheckboxContainer>
            <PhoneVerification onSend={() => {}} />
            <CodeContainer>
              <Code value={code} onChangeText={setCode} maxLength={6} keyboardType="numeric" />
            </CodeContainer>
          </SectionContainer>
          <SectionContainer>
            <CheckboxContainer>
              <SimpleCheckBox value={Boolean(code)} disabled />
              <Content>회원 정보 입력</Content>
            </CheckboxContainer>
          </SectionContainer>
          <SectionContainer>
            <CheckboxContainer>
              <SimpleCheckBox value={Boolean(code)} disabled />
              <Content>학생증 인증 {'\n'} (온라인 학생증도 가능)</Content>
            </CheckboxContainer>
          </SectionContainer>
        </ContentContainer>
        <BottomButton
          onPress={() => {
            setCode('');
          }}
          clicked={!code}>
          다음
        </BottomButton>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 24px;
`;

const SectionContainer = styled.View`
  margin-bottom: 36px;
`;

const CheckboxContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

const Content = styled.Text`
  margin-left: 8px;
`;

const CodeContainer = styled.View`
  align-items: center;
  text-align: center;
`;

const Code = styled.TextInput`
  width: 100px;
  text-align: center;
  padding: 8px;
  border: 0px solid #646481;
  border-bottom-width: 1px;
`;
