import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BackIcon } from '../../components/icon/BackIcon';
import { NotificationScreen } from './NotificationScreen';

export type NotificationStackParamList = {
  NotificationScreen: undefined;
};
const NotificationStack = createStackNavigator<NotificationStackParamList>();

export const NotificationNavigation = () => {
  return (
    <NotificationStack.Navigator
      initialRouteName="NotificationScreen"
      screenOptions={{
        headerTitleStyle: { alignSelf: 'center' },
        headerLeft: ({ onPress }) => <BackIcon onPress={onPress} />,
      }}>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ title: '알림', headerLeft: undefined }}
      />
    </NotificationStack.Navigator>
  );
};
