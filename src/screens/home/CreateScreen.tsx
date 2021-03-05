import React from 'react';
import styled from '@emotion/native';
import { Platform, Text, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MapView } from '../../components/map/MapView';
import { MapController } from '../../components/map/MapController';
import { SwipeableView } from '../../components/map/SwipeableView';
import { MapRoomCard } from '../../components/map/MapRoomCard';
const list = [{
	id: 1,
	gender: '무관',
	title: '남여공동방장',
	currentCount: 1,
	maxCount: 4,
	time: '13:00 탑승',
	startLocation: '경희대학교',
	arriveLocation: '공릉역',
}, {
		id: 2,
		gender: '여자',
		title: '여방장',
		currentCount: 1,
		maxCount: 4,
		time: '14:00 탑승',
		startLocation: '경희대학교',
		arriveLocation: '공릉역',
	}, {
		id: 3,
		gender: '남자',
		title: '남방장',
		currentCount: 1,
		maxCount: 4,
		time: '14:02 탑승',
		startLocation: '경희대학교',
		arriveLocation: '태릉입구역',
	}, {
		id: 4,
		gender: '여자',
		title: '여방장',
		currentCount: 1,
		maxCount: 4,
		time: '14:05 탑승',
		startLocation: '경희대학교',
		arriveLocation: '공릉역',
	}, {
		id: 5,
		gender: '여자',
		title: '여방장',
		currentCount: 1,
		maxCount: 4,
		time: '15:00 탑승',
		startLocation: '경희대학교',
		arriveLocation: '공릉역',
	}]

export function CreateScreen() {
	return <>
		<MapController />
		<MapView onTouch={() => console.log("onTouch")}
			onCameraChange={() => console.log("onCameraChange")}
			onMapClick={() => console.log("onMapClick")} />
		<SwipeableView datas={list} onPress={(id) => { return () => console.log("press") }} />
		<SelectedRoomView>
			<MapRoomCard key={list[0].id} data={list[0]} backgroundColor={"rgba(233,235,255,0.8)"} onPress={() => { return () => console.log("CreateScreenpress"); }}/>
		</SelectedRoomView>
		<SelectedBottomView>
			<BoxView>
				<LeftView>
					<EtaText>예상시간</EtaText>
					<RowView>
					<MinText>18분</MinText>
					<DistanceText>5km</DistanceText>
					</RowView>
				</LeftView>
				<RightView>
					<FeeText>예상금액</FeeText>
					<CoseText>약 6,700원~</CostText>
				</RightView>
			</BoxView>
		</SelectedBottomView>
		<BottomButtonView>
			{/* <Button onPress={() => console.log("createroom")} color={"#152c64"}title="방 만들기"/> */}
		</BottomButtonView>
	</>
}

const BottomButtonView = styled.View`
	position:absolute;
	bottom:0;
	width:100%;
`;
const SelectedRoomView = styled.View`
	position:absolute;
	top:22%;
	width:100%;
`;
const SelectedBottomView = styled.View`
	position:absolute;
	bottom:30px;
	width:100%;
	height:72px;
	// background-color:rgba(255,255,255,0.6);
	border-radius: 8px;
`;