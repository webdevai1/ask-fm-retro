import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Question, Post, Follower, Like } from '../../app/mockTypes';
import { users } from '../../app/mock';

const initialUser: User = {
  id: '',
  name: '',
  username: '',
  email: '',
  avatar: '',
  bgPhoto: '',
  followers: 0,
  gifts: 0,
  likes: 0,
  questions: [],
  posts: [],
  following: [],
};

const initialState = users.find(({ id }) => id === '1') || initialUser;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    followUser: (state, action: PayloadAction<Follower>) => {
      state.following.push(action.payload);
    },
    unfollowUser: (state, action: PayloadAction<string>) => {
      state.following = state.following.filter(
        follower => follower.id !== action.payload,
      );
    },
    addLikeToPost: (state, action: PayloadAction<Like>) => {
      const { postId } = action.payload;
      const post = state.posts.find(p => p.id === postId);
      if (post) {
        post.likes.push(action.payload);
        state.likes++;
      }
    },
  },
});

export const {
  updateUser,
  addQuestion,
  addPost,
  followUser,
  unfollowUser,
  addLikeToPost,
} = userSlice.actions;

export default userSlice.reducer;
