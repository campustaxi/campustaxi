import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
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
    <HomeTab.Navigator initialRouteName="HomeTabScreen">
      <HomeTab.Screen name="HomeTabScreen" component={HomeTabScreen} />
      <HomeTab.Screen name="MessageTabScreen" component={MessageTabScreen} />
      <HomeTab.Screen name="NotificationTabScreen" component={NotificationTabScreen} />
      <HomeTab.Screen name="SettingTabScreen" component={SettingTabScreen} />
    </HomeTab.Navigator>
  );
};
