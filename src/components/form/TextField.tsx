import styled from '@emotion/native';
import React, { Dispatch, SetStateAction } from 'react';
import { KeyboardTypeOptions } from 'react-native';

type Props = {
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  maxLength?: number;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  flex?: number;
  centered?: boolean;
  marginBottom?: number;
  padding?: number;
  border?: string;
};
export const TextField: React.FC<Props> = ({
  value,
  setValue,
  maxLength,
  placeholder,
  keyboardType,
  flex,
  centered,
  padding,
  border,
  marginBottom
}) => {
  return (
    <Box
      flex={flex}
      value={value}
      onChangeText={setValue}
      maxLength={maxLength}
      placeholder={placeholder}
      placeholderTextColor="#b0b0b2"
      keyboardType={keyboardType}
      centered={centered}
      marginBottom={marginBottom}
      padding={padding}
      border={border}
    />
  );
};

const Box = styled.TextInput<{ flex?: number; centered?: boolean; marginBottom?: number; padding?: number; border?: string;}>`
  flex: ${({ flex }) => flex};
  padding: ${({ padding }) => padding ? padding : '8px' };
  border: ${({ border }) => border ? border : '1px solid #B7B7BB' };
  border-radius: 21px;
  background-color: #FFFFFF;
  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '12px' };
  text-align: ${({ centered }) => centered && 'center'};
  height: 33px;
  width: 243px;
`;
