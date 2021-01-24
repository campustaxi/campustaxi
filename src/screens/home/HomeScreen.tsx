import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useAuthContext } from '../../contexts/AuthContext';
import { HomeStackParamList } from './HomeNavigation';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
export const HomeScreen: React.FC<Props> = () => {
  const { setLoggedOut } = useAuthContext();
  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          setLoggedOut();
        }}>
        home
      </Text>
    </SafeAreaView>
  );
};
