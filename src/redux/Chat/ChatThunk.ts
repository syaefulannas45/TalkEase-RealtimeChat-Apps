import {createAsyncThunk} from '@reduxjs/toolkit';
import {db, push, ref, serverTimestamp, update} from '../../config';
import {getChatTime, setDateChat} from '../../utils';

interface SendChatParams {
  user: any;
  uid: string;
  chatContent: string;
}
const sendChat = createAsyncThunk<void, SendChatParams>(
  'chat/sendChat',
  async ({user, uid, chatContent}: any) => {
    const today = new Date();
    const chatID1 = `${user.uid}_${uid}`;
    const chatID2 = `${uid}_${user.uid}`;
    const chatPath1 = `chattings/${chatID1}/${setDateChat(today)}`;
    const chatPath2 = `chattings/${chatID2}/${setDateChat(today)}`;
    const userChatHistoryPath = `messages/${user.uid}/${chatID1}`;
    const otherHistoryPath = `messages/${uid}/${chatID2}`;

    const chatData = {
      sendBy: user.uid,
      chatDate: serverTimestamp(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    const userChatHistoryData = {
      lastChatContent: chatContent,
      lastChatDate: serverTimestamp(),
      uidPartner: uid,
    };
    const otherChatHistoryData = {
      lastChatContent: chatContent,
      lastChatDate: serverTimestamp(),
      uidPartner: user.uid,
    };

    const chatRef1 = ref(db, chatPath1);
    const chatRef2 = ref(db, chatPath2);
    const historyChatRefUser = ref(db, userChatHistoryPath);
    const historyChatRefOther = ref(db, otherHistoryPath);

    await push(chatRef1, chatData);
    await push(chatRef2, chatData);
    await update(historyChatRefUser, userChatHistoryData);
    await update(historyChatRefOther, otherChatHistoryData);
  },
);
export {sendChat};
