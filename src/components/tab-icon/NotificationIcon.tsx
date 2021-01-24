import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const NotificationIcon: React.FC<{ focused?: boolean }> = ({ focused }) => {
  return (
    <Svg viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        fill={focused ? '#FF9515' : '#707070'}
        d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zM12 4a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 16a7 7 0 1 1 7-7 6.995 6.995 0 0 1-7 7z"
      />
    </Svg>
  );
};
