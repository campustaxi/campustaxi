import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { MessageStackParamList } from './MessageNavigation';

type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'MessageScreen'>;

type Props = {
  navigation: MessageScreenNavigationProp;
};
export const MessageScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>message</Text>
    </SafeAreaView>
  );
};
