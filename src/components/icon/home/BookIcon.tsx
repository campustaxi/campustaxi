import React, { SVGProps } from 'react';
import Svg, { G, Path } from 'react-native-svg';

type Props = SVGProps<SVGElement>;
export const BookIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <Svg width={width ?? 48} height={height ?? 48} viewBox="0 0 36.186 41.299">
      <G transform="translate(-50.576 -385.696)">
        <Path
          d="M66.886,373.908h5.308l2.089,2.1v2.713l-2.352,1.263H66.886l-2.527-1.622v-2.609Z"
          transform="translate(-3.313 16.748)"
          fill="#ff9515"
          stroke="#ff9515"
          stroke-width="1"
        />
        <Path
          d="M60.7,398.376h4.718V404.1l-2.4-2-2.313,2Z"
          transform="translate(-3.125 17.496)"
          fill="#ff9515"
          stroke="#ff9515"
          stroke-width="1"
        />
        <Path
          d="M7.336,37.305H9.194v1.239a.619.619,0,0,0,1.057.438l2.04-2.04,2.04,2.04a.619.619,0,0,0,1.057-.438V37.305H29.634a.619.619,0,0,0,.619-.619v-4.7l2.659,2.659a.619.619,0,0,0,.876,0l4.955-4.955a.619.619,0,0,0,0-.876l-8.49-8.49V16.5l7.561-7.561a2.809,2.809,0,0,0-3.973-3.973L30.253,8.557V2.619A.619.619,0,0,0,29.634,2H6.744A3.749,3.749,0,0,0,3,5.744V32.97a4.341,4.341,0,0,0,4.336,4.336ZM34.717,5.845a1.61,1.61,0,0,1,2.221,0,1.571,1.571,0,0,1,0,2.221l-.491.491L34.226,6.336ZM33.35,7.212l2.221,2.221-.982.982L32.368,8.194Zm-3.1,3.1L31.492,9.07l.673.673-1.911,1.911Zm0,3.1,2.787-2.787.673.673-3.46,3.46Zm0,15.848V22.077l1.292,1.292L30.435,24.48l.876.876,1.111-1.111.982.982-1.111,1.111.876.876L34.279,26.1l.982.982L34.151,28.2l.876.876,1.111-1.111,1.292,1.292L33.35,33.333l-3.1-3.1Zm-16.1,7.8-1.42-1.42a.619.619,0,0,0-.876,0l-1.42,1.42v-4.7h3.716ZM4.239,17.485V16.252A1.867,1.867,0,0,1,6.1,14.388h.613v4.336H6.1a3.072,3.072,0,0,0-1.864.639Zm0,5.575V21.827A1.867,1.867,0,0,1,6.1,19.962h.613V27.4H7.955V4.478H6.716v8.672H6.1a3.072,3.072,0,0,0-1.864.639V5.744A2.508,2.508,0,0,1,6.744,3.239h22.27v25.4H7.336a4.32,4.32,0,0,0-3.1,1.308Zm3.1,6.813H29.015v6.194H15.388V31.731a.619.619,0,0,0-.619-.619H9.813a.619.619,0,0,0-.619.619v4.336H7.336a3.1,3.1,0,0,1,0-6.194Z"
          transform="translate(47.576 383.696)"
          fill="#414141"
        />
        <Path
          d="M19.619,15.194a1.239,1.239,0,0,1,1.161.827.619.619,0,0,0,.583.412h6.422a.619.619,0,0,0,.583-.412,1.239,1.239,0,0,1,1.161-.827.619.619,0,0,0,.619-.619V10.858a.619.619,0,0,0-.619-.619,1.239,1.239,0,0,1-1.161-.827A.619.619,0,0,0,27.785,9H21.364a.619.619,0,0,0-.583.412,1.239,1.239,0,0,1-1.161.827.619.619,0,0,0-.619.619v3.716A.619.619,0,0,0,19.619,15.194Zm.619-3.8a2.483,2.483,0,0,0,1.518-1.159h5.636A2.483,2.483,0,0,0,28.91,11.4v2.637a2.483,2.483,0,0,0-1.518,1.159H21.756a2.483,2.483,0,0,0-1.517-1.159Z"
          transform="translate(41.486 381.032)"
          fill="#414141"
        />
      </G>
    </Svg>
  );
};