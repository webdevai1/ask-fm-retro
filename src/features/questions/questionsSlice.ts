import { createSlice } from '@reduxjs/toolkit';
import { Question } from '../../app/mockTypes';

interface QuestionsState {
  value: Question[];
}

const initialState: QuestionsState = {
  value: [
    {
      question: 'How Are You',
      author: 'Taras',
    },
    {
      question: 'Hello, world',
      author: null,
    },
  ],
};

const questionsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    questions(state, actions) {
      state.value.unshift(actions.payload);
    },
  },
});

export const { questions } = questionsSlice.actions;
export default questionsSlice.reducer;
