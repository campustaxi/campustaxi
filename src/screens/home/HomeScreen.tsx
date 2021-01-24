import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { HomeStackParamList } from './HomeNavigation';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
export const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>home</Text>
    </SafeAreaView>
  );
};
