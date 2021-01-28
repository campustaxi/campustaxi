import styled from '@emotion/native';
import React, { ReactNode } from 'react';

type Props = {
  onPress: () => void;
  icon?: ReactNode;
  color?: string;
  backgroundColor?: string;
};

export const BlankButton: React.FC<Props> = ({
  children,
  onPress,
  icon,
  color,
  backgroundColor,
}) => {
  return (
    <Box onPress={onPress} backgroundColor={backgroundColor}>
      <Container>
        {icon && <IconConatiner>{icon}</IconConatiner>}
        <ChildrenText color={color}>{children}</ChildrenText>
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
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const IconConatiner = styled.View`
  margin-right: 8px;
`;

const ChildrenText = styled.Text<{ color?: string }>`
  font-size: 18px;
  color: ${({ color }) => color};
`;
