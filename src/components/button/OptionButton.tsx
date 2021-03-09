import styled from '@emotion/native';
import React, { useState, useEffect, ReactNode } from 'react';
import { ToggleButton } from './ToggleButton';

type Props = {
    options: string[];
    icon?: ReactNode;
    color?: string;
    backgroundColor?: string;
    clicked?: boolean;
    height?: number;
    width?: number;
};

export const OptionButton: React.FC<Props> = ({ children, options, icon, clicked, height, width }) => {

    const [activeoption, setActiveoption] = useState(options[0]);

    return (
        <OptionButtonContainer>
            {options.map((option, index) => (
                <ToggleButton
                    backgroundColor={activeoption === option ? '#76A2EB' :  '#B7B7BB'}
                    borderWidth={1.5}
                    borderColor={activeoption === option ? '#76A2EB' :  '#B7B7BB'}
                    color="white"
                    height={height}
                    width={width}
                    icon={icon}
                    onPress={()=>{
                        setActiveoption(option);
                    }}
                    borderRadius={25}>
                    <ButtonText>{options[index]}</ButtonText>
                </ToggleButton>
            ))}
        </OptionButtonContainer>
    );
};

const OptionButtonContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 11px;
`;
