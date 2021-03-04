import styled from '@emotion/native';
import React, { Dispatch, SetStateAction } from 'react';
import NaverMapView, { Circle, Marker, Path, Polyline, Polygon } from "react-native-nmap";

type Props = {
  // setValue: Dispatch<SetStateAction<any>>;
  list?: string;
  width?: number;
  height?: number;
  onTouch: () => void;
  onCameraChange: () => void;
  onMapClick: () => void;
};

// 임시 값
const P0 = { latitude: 37.564362, longitude: 126.977011 };
const P1 = { latitude: 37.565051, longitude: 126.978567 };
const P2 = { latitude: 37.565383, longitude: 126.976292 };

export const MapView: React.FC<Props> = ({
  // setValue,
  list,
  width,
  height,
  onTouch,
  onCameraChange,
  onMapClick
}) => {
  return (
    <NaverMapView style={{ width: width, height: height }}
        showsMyLocationButton={true}
        center={{ ...P0, zoom: 16 }}
      onTouch={onTouch}
      onCameraChange={onCameraChange}
      onMapClick={onMapClick}>
    <Marker coordinate={P0} onClick={() => console.log('onClick! p0')} />
    <Marker coordinate={P1} pinColor="blue" onClick={() => console.log('onClick! p1')} />
    <Marker coordinate={P2} pinColor="red" onClick={() => console.log('onClick! p2')} />
    <Path coordinates={[P0, P1]} onClick={() => console.log('onClick! path')} width={10} />
    <Polyline coordinates={[P1, P2]} onClick={() => console.log('onClick! polyline')} />
    <Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200} onClick={() => console.log('onClick! circle')} />
    <Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} onClick={() => console.log('onClick! polygon')} />
      </NaverMapView>
  );
};

// const NaverMapView = styled.NaverMapView<{ flex?: number; centered?: boolean }>`
//   flex: ${({ flex }) => flex};
//   padding: 8px;
//   border: 2px solid rgba(149, 149, 149, 0.09);
//   border-radius: 8px;
//   margin-bottom: 12px;
//   text-align: ${({ centered }) => centered && 'center'};
// `;
