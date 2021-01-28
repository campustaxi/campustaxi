import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FindIdStackParamList } from './FindIdNaviagtion';

type FindIdScreenNavigationProp = StackNavigationProp<FindIdStackParamList, 'FindIdScreen'>;

type Props = {
  navigation: FindIdScreenNavigationProp;
};
export const FindIdScreen: React.FC<Props> = () => {
  return <></>;
};
