import React from 'react';
// import SwipeablePanel from 'rn-swipeable-panel';
import { Platform, Text, Alert, Button } from 'react-native';
import { MapView } from '../../components/map/MapView';
import { MapController } from '../../components/map/MapController';
import { SwipeableView } from '../../components/map/SwipeableView';

const setAction = ()=> console.log("asd"); 
export function CreateScreen() {
	console.log("asd"); 
	return <>
		<MapController />
		<MapView onTouch={() => console.log("onTouch")}
			onCameraChange={() => console.log("onCameraChange")}
			onMapClick={() => console.log("onMapClick")} />
		<SwipeableView/>
		<Button onPress={()=>console.log("createroom")} title="방 만들기"/>
	</>
}