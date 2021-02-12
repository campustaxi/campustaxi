import React from 'react';
import { ChatRoomCard } from './ChatRoomCard';

export type ChatRoom = {
  id: number;
  gender: string;
  title: string;
  currentCount: number;
  maxCount: number;
  time: string;
  startLocation: string;
  arriveLocation: string;
  unreadMessage: string;
};

export type Props = {
  onPress: (id: number) => () => void;
  datas: ChatRoom[];
};
export const ChatRoomList: React.FC<Props> = ({ datas, onPress }) => {
  return (
    <>
      {datas.map((data) => (
        <ChatRoomCard key={data.id} data={data} onPress={onPress(data.id)} />
      ))}
    </>
  );
};
