import React from 'react';
import ItsMe, {ChatItems} from './ItsMe';
import ItsOther from './ItsOther';

interface Chatting extends ChatItems {
  isMe?: boolean;
}
const ChatItem = ({message, date, isMe}: Chatting) => {
  if (isMe) return <ItsMe message={message} date={date} />;
  return (
    <>
      <ItsOther message={message} date={date} />
    </>
  );
};

export default ChatItem;
