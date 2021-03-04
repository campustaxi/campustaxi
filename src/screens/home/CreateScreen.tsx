import React from 'react';
// import SwipeablePanel from 'rn-swipeable-panel';
import { Platform, Text, Alert, Button } from 'react-native';
import { MapView } from '../../components/map/MapView';
import { MapController } from '../../components/map/MapController';
import { BottomButton } from '../../components/button/BottomButton';

// const PanelContent: React.FC<Props> = () => {
// 	return <>
// 		<Text>asd</Text>
// 	</>;
// };

// type PropsSwipeablePanel = (
// 	isActive: string;
// 	onClose: string;
// 	onPressCloseButton?: string;
// );

// const SwipeView: React.FC<Props> = () => {
// 	return
// 		<SwipeablePanel
// 			fullWidth
// 			isActive={isActive}
// 			onClose={this.closePanel}
// 			onPressCloseButton={this.closePanel}
// 		>
// 			<PanelContent /> {/* Your Content Here */}
// 		</SwipeablePanel>
// }

const setAction = ()=> console.log("asd"); 
export function CreateScreen() {
	console.log("asd"); 
	return <>
		<MapController />
		<MapView onTouch={() => console.log("onTouch")}
			onCameraChange={() => console.log("onCameraChange")}
			onMapClick={() => console.log("onMapClick")} />
		<BottomButton onPress={()=>console.log("createroom")}>방 만들기</BottomButton>
	</>
}