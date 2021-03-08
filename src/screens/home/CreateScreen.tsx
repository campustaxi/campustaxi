import React from 'react';
import styled from '@emotion/native';
import { Platform, Text, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MapView } from '../../components/map/MapView';
import { MapController } from '../../components/map/MapController';
import { SwipeableView } from '../../components/map/SwipeableView';
import { MapRoomCard } from '../../components/map/MapRoomCard';
import { SelectedBottomView } from '../../components/map/SelectedBottomView';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../tab/HomeTabNavigation'

const list = [{
	id: 1,
	title: '남여공동방장ㅁㅁㅁ',
	currentCount: 1,
	maxCount: 4,
	time: '13:00 탑승',
	startLocation: '공릉역 2번출구',
	arriveLocation: '삼육대학교 중앙도서관',
	gender: 'all',
	start_lat: '37.625311',
	start_lon: '127.073278',
	end_lat: '37.643111',
	end_lon: '127.106535',
}, {
	id: 2,
	title: '여방장',
	currentCount: 1,
	maxCount: 4,
	time: '14:00 탑승',
	startLocation: '태릉입구역 2번출구',
	arriveLocation: '삼육대학교 중앙도서관',
	gender: 'woman',
	start_lat: '37.618363',
	start_lon: '127.075230',
	end_lat: '37.643111',
	end_lon: '127.106535',
}, {
	id: 3,
	title: '남방장',
	currentCount: 1,
	maxCount: 4,
	time: '14:02 탑승',
	startLocation: '태릉입구역 2번출구',
	arriveLocation: '삼육대학교 중앙도서관',
	gender: 'man',
	start_lat: '37.618363',
	start_lon: '127.075230',
	end_lat: '37.643111',
	end_lon: '127.106535',
}, {
	id: 4,
	title: '여방장',
	currentCount: 1,
	maxCount: 4,
	time: '14:05 탑승',
	startLocation: '태릉입구역 7번출구',
	arriveLocation: '삼육대학교 중앙도서관',
	gender: 'woman',
	start_lat: '37.617592',
	start_lon: '127.076038',
	end_lat: '37.643111',
	end_lon: '127.106535',
}, {
	id: 5,
	title: '여방장',
	currentCount: 1,
	maxCount: 4,
	time: '15:00 탑승',
	startLocation: '태릉입구역 7번출구',
	arriveLocation: '삼육대학교 분수대',
	gender: 'woman',
	start_lat: '37.617592',
	start_lon: '127.076038',
	end_lat: '37.643536',
	end_lon: '127.105768',
}]

export function CreateScreen() {
	return <>
		<MapController />
		<MapView onTouch={() => console.log("onTouch")}
			onCameraChange={() => console.log("onCameraChange")}
			onMapClick={() => console.log("onMapClick")}
			datas={list} />
		<SwipeableView datas={list} onPress={(id) => { return () => console.log("press") }} />
		<SelectedRoomView>
			<MapRoomCard key={list[0].id} data={list[0]} backgroundColor={"rgba(233,235,255,0.8)"} onPress={() => { return () => console.log("CreateScreenpress"); }} />
		</SelectedRoomView>
		<SelectedBottomView />
		<BottomButtonView>
			<Button onPress={() => console.log("createroom")} color={"#76A2EB"} title="방 만들기" />
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
	top:0;
	marginTop:100px;
	width:100%;
`;
