import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ChatContent {
  sendBy: string;
  chatDate: Date;
  chatTime: Date;
  chatContent: string;
}

interface ChatData {
  id: string;
  data: ChatContent;
}

interface ChatState {
  chatData: ChatData[];
  chatContent: string;
}

const initialState: ChatState = {
  chatData: [],
  chatContent: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatData: (state, action: PayloadAction<ChatData[]>) => {
      state.chatData = action.payload;
    },
    setChatContent: (state, action: PayloadAction<string>) => {
      state.chatContent = action.payload;
    },
  },
});

export const {setChatData, setChatContent} = chatSlice.actions;
export default chatSlice.reducer;
