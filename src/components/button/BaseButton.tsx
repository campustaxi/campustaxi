import styled from '@emotion/native';
import React, { ReactNode } from 'react';

type Props = {
  onPress: () => void;
  icon?: ReactNode;
  backgroundColor?: string;
};

export const BaseButton: React.FC<Props> = ({ children, onPress, icon, backgroundColor }) => {
  return (
    <Box onPress={onPress} backgroundColor={backgroundColor}>
      <Container>
        {icon && <IconConatiner>{icon}</IconConatiner>}
        <ChildrenText>{children}</ChildrenText>
      </Container>
    </Box>
  );
};

const Box = styled.TouchableOpacity<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  border-radius: 36px;
  justify-content: center;
`;

const Container = styled.View`
  flex-direction: row;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const IconConatiner = styled.View`
  margin-right: 8px;
`;

const ChildrenText = styled.Text`
  font-size: 24px;
`;
