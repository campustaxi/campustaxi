import styled from '@emotion/native';
import React, { ReactNode } from 'react';

type Props = {
  onPress: () => void;
  icon?: ReactNode;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  paddingBottom?: number;
};

export const BlankButton: React.FC<Props> = ({
  children,
  onPress,
  icon,
  color,
  backgroundColor,
  borderRadius,
  paddingBottom,
}) => {
  return (
    <Box
      onPress={onPress}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      paddingBottom={paddingBottom}>
      <Container>
        {icon && <IconConatiner>{icon}</IconConatiner>}
        <ChildrenText color={color}>{children}</ChildrenText>
      </Container>
    </Box>
  );
};

type BoxProps = {
  backgroundColor?: string;
  borderRadius?: number;
  paddingBottom?: number;
};

const Box = styled.TouchableOpacity<BoxProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius && `${borderRadius}px`};
  justify-content: center;
  padding-bottom: ${({ paddingBottom }) => paddingBottom && `${paddingBottom}px`};
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
