import styled from '@emotion/native';
import React from 'react';

export const BlankBackground: React.FC = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
