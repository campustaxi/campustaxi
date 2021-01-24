import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NotificationStackParamList } from './NotificationNavigation';

type NotificationScreenNavigationProp = StackNavigationProp<
  NotificationStackParamList,
  'NotificationScreen'
>;

type Props = {
  navigation: NotificationScreenNavigationProp;
};
export const NotificationScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>notification</Text>
    </SafeAreaView>
  );
};
