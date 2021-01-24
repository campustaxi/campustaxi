import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MessageScreen } from './MessageScreen';

export type MessageStackParamList = {
  MessageScreen: undefined;
};
const MessageStack = createStackNavigator<MessageStackParamList>();

export const MessageNavigation = () => {
  return (
    <MessageStack.Navigator initialRouteName="MessageScreen" headerMode="none">
      <MessageStack.Screen name="MessageScreen" component={MessageScreen} />
    </MessageStack.Navigator>
  );
};
