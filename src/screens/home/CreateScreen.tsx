import React from 'react';
// import SwipeablePanel from 'rn-swipeable-panel';
import { Platform, Text, Alert } from 'react-native';
import { MapView } from '../../components/map/MapView';

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
		<MapView width={100} height={100} onTouch={() => Alert.alert("onTouch")}
			onCameraChange={() => Alert.alert("onCameraChange")}
			onMapClick={() => Alert.alert("onMapClick")}/>
	</>
}