import React from 'react';
import Svg, { G, Path, Text } from 'react-native-svg';

type Props = {
  fill?: string;
};
export const MainLogo: React.FC<Props> = ({ fill }) => {
  return (
    <Svg width="159.311" height="24" viewBox="0 0 132.311 24">
      <G transform="translate(-113.689 -27)">
        <G transform="translate(113.689 30.952)">
          <G transform="translate(0 0)">
            <Path
              d="M21.642,9.879a2.542,2.542,0,0,1-.293-.785,1.5,1.5,0,0,0-.814-1.156,6.463,6.463,0,0,0-.916-.3c-.216-.051-.319-.136-.341-.366a7.7,7.7,0,0,0-.511-2.081A8.232,8.232,0,0,0,12.119.034,8.08,8.08,0,0,0,7.1,1.01,8.139,8.139,0,0,0,3.991,4.062a.3.3,0,0,1-.3.172c-.318-.007-.637-.007-.957,0H2.212a.658.658,0,1,0,0,1.315H8.578c.239.007.367.125.366.344s-.125.336-.37.337H5.823a1.729,1.729,0,0,0-.188.011H5.5a.658.658,0,0,0,0,1.315h4.613A.288.288,0,0,1,10.3,7.7c.143.258-.02.505-.339.505H1.078a.658.658,0,0,0,0,1.315H7.36a.421.421,0,0,1,.346.1.336.336,0,0,1,.1.379.376.376,0,0,1-.38.241c-1.409,0-2.819,0-4.227,0a1.954,1.954,0,0,0-.235.009H2.893a.658.658,0,0,0,0,1.315H3.38a.788.788,0,0,1,.452.484,9.7,9.7,0,0,0,1.844,2.494,38.666,38.666,0,0,0,5.333,4.588c.09.066.131.036.2-.015a36.623,36.623,0,0,0,4.385-3.57,14.72,14.72,0,0,0,2.429-2.85.272.272,0,0,1,.075-.078,1.836,1.836,0,0,0,1.384-1.031.339.339,0,0,1,.138-.039c.452-.039.9-.084,1.351-.162A1.018,1.018,0,0,0,21.642,9.879ZM6.394,4.231H6.081a6.331,6.331,0,0,1,2.2-1.781,6.125,6.125,0,0,1,2.926-.64,6.308,6.308,0,0,1,5.284,2.925A6.529,6.529,0,0,1,17.369,6.8c.072.279.038.309-.237.245a2.115,2.115,0,0,0-.323-.063,4.278,4.278,0,0,1-1.83-.79c-.769-.46-1.555-.9-2.344-1.329a5.423,5.423,0,0,0-2.13-.539C9.136,4.188,7.764,4.24,6.394,4.231Zm11.419,7.713a1.127,1.127,0,0,1-1.127-1.136,1.146,1.146,0,0,1,1.148-1.144,1.158,1.158,0,0,1,1.132,1.14,1.141,1.141,0,0,1-1.153,1.139Zm1.847-1.2a1.837,1.837,0,1,0-3.33,1.127.3.3,0,0,1-.076.195l-.007.009a6.41,6.41,0,0,1-3.17,2.267,6.257,6.257,0,0,1-3.915.006,6.391,6.391,0,0,1-3.411-2.588c-.034-.051-.1-.113-.057-.175s.122-.029.185-.029h9.793c.1.006.146-.022.136-.113a2.014,2.014,0,1,1,3.857-.814C19.664,10.665,19.662,10.7,19.661,10.742Z"
              transform="translate(-0.448 0.034)"
              fill={fill ?? '#000'}
            />
            <Path
              d="M38.976,101.446a.658.658,0,1,0,0-1.315h-.4a.658.658,0,0,0,0,1.315Z"
              transform="translate(-35.6 -93.856)"
              fill={fill ?? '#000'}
            />
            <Path
              d="M247.969,145.069a2,2,0,1,1,2-2A2,2,0,0,1,247.969,145.069Zm0-3.118a1.119,1.119,0,1,0,1.119,1.119A1.119,1.119,0,0,0,247.969,141.951Z"
              transform="translate(-230.591 -132.232)"
              fill={fill ?? '#000'}
            />
            <Path
              d="M132.344,52.388l-1.5-.928a.273.273,0,0,0-.144-.041h-.99a.035.035,0,0,0-.027.057l.639.76c.411.014,1.114.042,1.525.084C132.037,52.341,132.154,52.362,132.344,52.388Z"
              transform="translate(-121.583 -48.197)"
              fill={fill ?? '#000'}
            />
          </G>
        </G>
        <Text
          transform="translate(142 46)"
          fill={fill ?? '#000'}
          fontSize="18"
          letterSpacing="-0.04em"
          opacity="0.866">
          CAMPUS TAXI
        </Text>
      </G>
    </Svg>
  );
};
