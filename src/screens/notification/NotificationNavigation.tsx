import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NotificationScreen } from './NotificationScreen';

export type NotificationStackParamList = {
  NotificationScreen: undefined;
};
const NotificationStack = createStackNavigator<NotificationStackParamList>();

export const NotificationNavigation = () => {
  return (
    <NotificationStack.Navigator initialRouteName="NotificationScreen">
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ title: '알림' }}
      />
    </NotificationStack.Navigator>
  );
};
