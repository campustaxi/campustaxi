import styled from '@emotion/native';
import React, { useState, useEffect, ReactNode } from 'react';
import { BlankButton } from './BlankButton';

type Props = {
    options: string[];
    icon?: ReactNode;
    color?: string;
    backgroundColor?: string;
    clicked?: boolean;
};

export const OptionButton: React.FC<Props> = ({ children, options, icon, clicked }) => {

    const [activeoption, setActiveoption] = useState(options[0]);

    return (
        <OptionButtonContainer>
            {options.map((option, index) => (
                <BlankButton
                    backgroundColor={activeoption === option ? '#000000' : '#B7B7BB'}
                    borderWidth={2}
                    color="white"
                    icon={icon}
                    onPress={()=>{
                        setActiveoption(option);
                    }}
                    borderRadius={36}>
                    {options[index]}
                </BlankButton>
            ))}
        </OptionButtonContainer>
    );
};

const OptionButtonContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;
