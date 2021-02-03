import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeIcon } from '../../components/tab-icon/HomeIcon';
import { MessageIcon } from '../../components/tab-icon/MessageIcon';
import { NotificationIcon } from '../../components/tab-icon/NotificationIcon';
import { SettingIcon } from '../../components/tab-icon/SettingIcon';
import { HomeTabScreen } from './HomeTabScreen';
import { MessageTabScreen } from './MessageTabScreen';
import { NotificationTabScreen } from './NotificationTabScreen';
import { SettingTabScreen } from './SettingTabScreen';

export type HomeTabParamList = {
  HomeTabScreen: undefined;
  MessageTabScreen: undefined;
  NotificationTabScreen: undefined;
  SettingTabScreen: undefined;
};
const HomeTab = createBottomTabNavigator<HomeTabParamList>();

export const HomeTabNavigation = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="HomeTabScreen"
      screenOptions={{ title: '' }}
      tabBarOptions={{
        iconStyle: {
          marginTop: 16,
        },
      }}>
      <HomeTab.Screen
        name="HomeTabScreen"
        component={HomeTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <HomeIcon focused /> : <HomeIcon />),
        }}
      />
      <HomeTab.Screen
        name="MessageTabScreen"
        component={MessageTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <MessageIcon focused /> : <MessageIcon />),
        }}
      />
      <HomeTab.Screen
        name="NotificationTabScreen"
        component={NotificationTabScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <NotificationIcon focused /> : <NotificationIcon />,
        }}
      />
      <HomeTab.Screen
        name="SettingTabScreen"
        component={SettingTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <SettingIcon focused /> : <SettingIcon />),
        }}
      />
    </HomeTab.Navigator>
  );
};
