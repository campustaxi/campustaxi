import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BackIcon } from '../../components/icon/BackIcon';
import { CloseIcon } from '../../components/icon/CloseIcon';
import { ChatRoomScreen } from '../message/ChatRoomScreen';
import { CategoryChatListScreen } from './CategoryChatListScreen';
import { CreateChatScreen } from './CreateChatScreen';
import { HomeScreen } from './HomeScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  CategoryChatListScreen: { categoryName: string };
  ChatRoomScreen: { id: number };
  CreateChatScreen: undefined;
};
const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigation: React.FC = ({}) => {
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
