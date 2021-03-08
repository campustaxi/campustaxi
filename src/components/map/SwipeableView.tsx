import styled from '@emotion/native';
import React, { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { MapRoomCard } from './MapRoomCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export type ChatRoom = {
	id: number;
	gender: string;
	title: string;
	currentCount: number;
	maxCount: number;
	time: string;
	startLocation: string;
	arriveLocation: string;
	unreadMessage?: string;
};

type Props = {
	datas: ChatRoom[];
	onPress: (id: number) => () => void;
};
export const SwipeableView: React.FC<Props> = ({
	datas,
	onPress
}) => {
	const modalizeRef = useRef<Modalize>(null);
	const onOpen = () => {
		modalizeRef.current?.open();
	};
	return (
		<>
		<View style={{ height:'76%', width: '100%', position: 'absolute', bottom: 0 }}>
				<Modalize alwaysOpen={42} ref={modalizeRef}
					overlayStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
					handlePosition="inside"
					handleStyle={{ backgroundColor: "#707070" }}
					modalStyle={{ backgroundColor: 'rgba(255,250,240,0.9)', padding: 10, marginHorizontal: 5, paddingTop:42 }}
				>
					{datas.map((data) => (
						<MapRoomCard key={data.id} data={data} onPress={onPress(data.id)} gender={data.gender} />
					))}
				</Modalize>
			</View>
			</>
  );
};