import styled from '@emotion/native';
import React, { Dispatch, SetStateAction } from 'react';
import NaverMapView, { Circle, Marker, Path, Polyline, Polygon, Coord } from "react-native-nmap";
import { Dimensions, InteractionManager } from 'react-native';
import { View } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export type ChatMapProps = {
  id: number;
  gender: string;
  title: string;
  currentCount: number;
  maxCount: number;
  time: string;
  startLocation: string;
  arriveLocation: string;
  unreadMessage?: string;
  start_lat: string;
  start_lon: string;
  end_lat: string;
  end_lon: string;
};

type Props = {
  // setValue: Dispatch<SetStateAction<any>>;
  datas: Array<ChatMapProps>;
  onTouch: () => void;
  onCameraChange: () => void;
  onMapClick: () => void;
};


export const MapView: React.FC<Props> = ({
  // setValue,
  datas,
  onTouch,
  onCameraChange,
  onMapClick
}) => {
  return (
    <>
      <NaverMapView
        minZoomLevel={10}
        maxZoomLevel={18}
        style={{ width: '100%', height: '100%' }}
        showsMyLocationButton={true}
        center={{ latitude: 37.617592, longitude: 127.076038, zoom: 16 }}
        onTouch={onTouch}
        onCameraChange={onCameraChange}
        onMapClick={onMapClick}>
        {datas.map((data) => (
          <Marker key={data.id}
            coordinate={{ latitude: parseInt(data.start_lat), longitude: parseInt(data.start_lon) }}
            pinColor="red"
            onClick={() => console.log('onClick! p1')} />
        ))}
        {datas.map((data) => (
          <Marker key={data.id}
            coordinate={{ latitude: parseInt(data.end_lat), longitude: parseInt(data.end_lon) }}
            pinColor="blue" onClick={() =>
              console.log('onClick! p2')} />
        ))}
        <MarkerGroup coord={{ latitude: parseInt(datas[0].start_lat), longitude: parseInt(datas[0].start_lon) }} />
        {/* <Path coordinates={[P0, P1]} onClick={() => console.log('onClick! path')} width={10} />
    <Polyline coordinates={[P1, P2]} onClick={() => console.log('onClick! polyline')} />
    <Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200} onClick={() => console.log('onClick! circle')} />
    <Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} onClick={() => console.log('onClick! polygon')} /> */}
      </NaverMapView>
    </>
  );
};

const MarkerGroup = (coord: any) => <><Circle coordinate={coord} radius={200} color="red"></Circle></>;
// const NaverMapView = styled.NaverMapView<{ flex?: number; centered?: boolean }>`
//   flex: ${({ flex }) => flex};
//   padding: 8px;
//   border: 2px solid rgba(149, 149, 149, 0.09);
//   border-radius: 8px;
//   margin-bottom: 12px;
//   text-align: ${({ centered }) => centered && 'center'};
// `;
