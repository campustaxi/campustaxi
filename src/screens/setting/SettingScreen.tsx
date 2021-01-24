import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { SettingStackParamList } from './SettingNavigation';

type SettingScreenNavigationProp = StackNavigationProp<SettingStackParamList, 'SettingScreen'>;

type Props = {
  navigation: SettingScreenNavigationProp;
};
export const SettingScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>setting</Text>
    </SafeAreaView>
  );
};
