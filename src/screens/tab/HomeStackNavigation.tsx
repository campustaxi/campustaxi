import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BackIcon } from '../../components/icon/BackIcon';
import { CloseIcon } from '../../components/icon/CloseIcon';
import { CategoryChatListScreen } from '../home/CategoryChatListScreen';
import { CreateChatScreen } from '../home/CreateChatScreen';
import { ChatRoomScreen } from '../message/ChatRoomScreen';
import { HomeTabNavigation } from './HomeTabNavigation';

export type HomeStackParamList = {
  HomeScreen: undefined;
  CategoryChatListScreen: { categoryName: string };
  ChatRoomScreen: { id: number };
  CreateChatScreen: undefined;
};
const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigation: React.FC = ({}) => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerLeft: ({ onPress }) => <BackIcon onPress={onPress} /> }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeTabNavigation}
        options={{ headerShown: false }}
      />
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
      <HomeStack.Screen
        name="CreateChatScreen"
        component={CreateChatScreen}
        options={{
          title: '방만들기',
          headerLeft: ({ onPress }) => <CloseIcon onPress={onPress} />,
        }}
      />
    </HomeStack.Navigator>
  );
};
