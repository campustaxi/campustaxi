import styled from '@emotion/native';
import React, { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = {
  list?: string;
};
export const SwipeableView: React.FC<Props> = ({
  list,
}) => {
	const modalizeRef = useRef<Modalize>(null);
	const onOpen = () => {
		modalizeRef.current?.open();
	};
	return (
		<>
		<View style={{ height:'70%', width: '100%', position: 'absolute', bottom: 0 }}>
				<Modalize alwaysOpen={60} ref={modalizeRef}
					overlayStyle={{backgroundColor:'rgba(0,0,0,0)'}}
					handlePosition="inside"
					modalStyle={{ backgroundColor: 'rgba(255,250,240,0.9)' }}
					onBackButtonPress={() => { console.log("press"); return true }}
				><Text>asd</Text></Modalize>
			</View>
		{/* <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
			<Button color="white" onPress={onOpen} title="" />

			</View> */}
			</>
  );
};