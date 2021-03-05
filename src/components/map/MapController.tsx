import styled from '@emotion/native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Search } from '../../components/icon/home/Search';
type Props = {
  // setValue: Dispatch<SetStateAction<any>>;
  placeholderStart?: string;
  placeholderEnd?: string;
  textinputStart?: string;
  textinputEnd?: string;
  // startSetState: () => void;
  // endSetState: () => void;
};

export const MapController: React.FC<Props> = ({
  // setValue,
  placeholderStart,
  placeholderEnd,
  textinputStart,
  textinputEnd,
  // startSetState,
  // endSetState
}) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  return (
    <View style={{ backgroundColor: 'white', height: 93 }}>
      <View style={{ height: 40,flexDirection: 'row', marginHorizontal:5,marginVertical:5, paddingHorizontal:5, paddingVertical:0,backgroundColor: 'rgba(112,112,112,0.12)', borderRadius: 6, alignItems: 'center'}}>
        <Search/>
        <TextInput
          value={start}
          onChangeText={text => setStart(text)}
          clearButtonMode={"always"}
          underlineColorAndroid="transparent"
          placeholder="출발지를 입력해주세요." 
          />
      </View>
      <View style={{ height: 40, flexDirection: 'row', marginHorizontal: 5, paddingHorizontal: 5, paddingVertical: 0, backgroundColor: 'rgba(112,112,112,0.12)', borderRadius: 6, alignItems: 'center'}}>
          <Search/>
        <TextInput
          value={end}
          onChangeText={text => setEnd(text)}
          clearButtonMode={"always"}
          underlineColorAndroid="transparent"
          placeholder="도착지를 입력해주세요." 
        />
      </View>
      </View>
  );
};

