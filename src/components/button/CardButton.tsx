import styled from '@emotion/native';
import React, { useState, useEffect, ReactNode } from 'react';
import { ToggleButton } from './ToggleButton';

type Props = {
    options: string[];
    icon?: ReactNode[];
    color?: string;
    backgroundColor?: string;
    clicked?: boolean;
};

export const CardButton: React.FC<Props> = ({ children, options, icon, clicked, height, width }) => {

    const [activeoption, setActiveoption] = useState(options[0]);

    return (
        <OptionButtonContainer>
            {options.map((option, index) => (
                <ToggleButton
                    backgroundColor={activeoption === option ? 'rgba(247, 255, 0, 0.13)' :  '#FFFFFF'}
                    boxShadow = '0 3px 6px rgba(0, 0, 0, 0.16)'
                    borderWidth={1.5}
                    borderColor={activeoption === option ? 'rgba(247, 255, 0, 0.13)' :  '#FFFFFF'}
                    icon={icon[index]}
                    height={101}
                    width={103}
                    onPress={()=>{
                        setActiveoption(option);
                    }}
                    borderRadius={8}>
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
  color: #000000;
  font-size: 11px;
`;
