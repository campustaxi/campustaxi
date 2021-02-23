import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BackIcon } from '../../components/icon/BackIcon';
import { ChatRoomScreen } from '../message/ChatRoomScreen';
import { CategoryChatListScreen } from './CategoryChatListScreen';
import { HomeScreen } from './HomeScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  CategoryChatListScreen: { categoryName: string };
  ChatRoomScreen: { id: number };
};
const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerLeft: ({ onPress }) => <BackIcon onPress={onPress} /> }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="CategoryChatListScreen"
        component={CategoryChatListScreen}
        options={({ route }) => ({
          title: `${route.params.categoryName} 채팅방 목록`,
        })}
      />
      <HomeStack.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={{ headerTransparent: true }}
      />
    </HomeStack.Navigator>
  );
};
