import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native-svg';
import { FindIdScreen } from './FindIdScreen';

export type FindIdStackParamList = {
  FindIdScreen: undefined;
};
const FindIdStack = createStackNavigator<FindIdStackParamList>();

export const FindIdNavigation: React.FC = () => {
  return (
    <FindIdStack.Navigator
      initialRouteName="FindIdScreen"
      screenOptions={{
        headerLeft: (props) => {
          console.log(props);
          return <Text>{props.label}</Text>;
        },
      }}>
      <FindIdStack.Screen name="FindIdScreen" component={FindIdScreen} />
    </FindIdStack.Navigator>
  );
};
