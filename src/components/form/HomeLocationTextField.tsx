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
};
export const HomeLocationTextField: React.FC<Props> = ({
                                               value,
                                               setValue,
                                               maxLength,
                                               placeholder,
                                               keyboardType,
                                               flex,
                                               centered,
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
        />
    );
};

const Box = styled.TextInput<{ flex?: number; centered?: boolean }>`
  height: 33px;
  width: 243px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #B7B7BB;
  border-radius: 21px;
  font-size: 11px;
  color: #B7B7BB;
  background-color: #FFFFFF;
  text-align: ${({ centered }) => centered && 'center'};
`;