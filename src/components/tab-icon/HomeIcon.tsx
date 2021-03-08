import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export const HomeIcon: React.FC<{ focused?: boolean }> = ({ focused }) => {
  return (
    <Svg viewBox="0 0 20.825 19.794" width="24" height="24">
      <G id="그룹_2">
        <G id="그룹_1">
          <Path
            id="패스_5"
            fill={focused ? '#76A2EB' : '#707070'}
            d="M20.475 21.469l-9.343-8.514a1.063 1.063 0 0 0-1.438 0L.35 21.469a1.068 1.068 0 0 0 .719 1.857h1.492v8.53a.612.612 0 0 0 .612.612h5.122a.612.612 0 0 0 .612-.612v-5.179h3.01v5.179a.612.612 0 0 0 .612.612h5.121a.612.612 0 0 0 .612-.612v-8.53h1.493a1.068 1.068 0 0 0 .719-1.857z"
            transform="translate(0 -12.675)"
          />
        </G>
      </G>
      <G id="그룹_4" transform="translate(13.99 1.222)">
        <G id="그룹_3">
          <Path
            id="패스_6"
            d="M348.086 42.73h-4.113l4.725 4.3v-3.688a.612.612 0 0 0-.612-.612z"
            fill={focused ? '#76A2EB' : '#707070'}
            transform="translate(-343.973 -42.73)"
          />
        </G>
      </G>
    </Svg>
  );
};
