import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const MessageIcon: React.FC<{ focused?: boolean }> = ({ focused }) => {
  return (
    <Svg viewBox="0 0 24 24" width="24" height="24">
      <Path fill="rgba(0,0,0,0)" d="M0 0h24v24H0z" />
      <Path
        fill={focused ? '#FF9515' : '#707070'}
        d="M20 2H4a2 2 0 0 0-1.99 2L2 22l4-4h14a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2zM6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
      />
    </Svg>
  );
};
