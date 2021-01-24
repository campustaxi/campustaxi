import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NotificationScreen } from './NotificationScreen';

export type NotificationStackParamList = {
  NotificationScreen: undefined;
};
const NotificationStack = createStackNavigator<NotificationStackParamList>();

export const NotificationNavigation = () => {
  return (
    <NotificationStack.Navigator initialRouteName="NotificationScreen" headerMode="none">
      <NotificationStack.Screen name="NotificationScreen" component={NotificationScreen} />
    </NotificationStack.Navigator>
  );
};
