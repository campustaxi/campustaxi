import styled from '@emotion/native';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const MarketingScreen: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <Text>{`마케팅 정보 수신동의
개인정보보호법 제22조 제4항에 의해 선택정보 사항에 대해서는 기재하지 않으셔도 서비스를 이용하실 수 있습니다.

① 마케팅 및 광고에의 활용
– 신규 기능 개발 및 맞춤 서비스 제공
– 뉴스레터 발송, 새로운 기능(제품)의 안내
– 할인 및 쿠폰 등 이벤트 등 광고성 정보 제공

② 캠퍼스택시 서비스를 운용함에 있어 각종 정보를 서비스 화면, SMS, 이메일 등의 방법으로 회원에게 제공할 수 있으며, 결제안내 등 의무적으로 안내되어야 하는 정보성 내용 및 일부 혜택성 정보는 수신동의 여부와 무관하게 제공합니다.`}</Text>
      </ScrollView>
    </Container>
  );
};

const Container = styled.SafeAreaView``;
