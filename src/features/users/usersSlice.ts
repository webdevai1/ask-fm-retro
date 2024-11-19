import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Question } from '../../app/mockTypes';
import { users } from '../../app/mock';

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: users || [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    followUser: (state, action: PayloadAction<string>) => {
      const userIdToFollow = action.payload;
      const userToFollow = state.users.find(user => user.id === userIdToFollow);
      if (userToFollow) {
        // Реализуйте логику подписки на пользователя, например, добавление его в массив подписок текущего пользователя
        // userToFollow можно использовать для получения данных о пользователе, на которого подписываемся
      }
    },
    unfollowUser: (state, action: PayloadAction<string>) => {
      const userIdToUnfollow = action.payload;
      const userToUnfollow = state.users.find(
        user => user.id === userIdToUnfollow,
      );
      if (userToUnfollow) {
        // Реализуйте логику отписки от пользователя, например, удаление его из массива подписок текущего пользователя
        // userToUnfollow можно использовать для получения данных о пользователе, от которого отписываемся
      }
    },
    addLikeToUserPost: (
      state,
      action: PayloadAction<{
        userId: string;
        postId: string;
        likerId: string;
      }>,
    ) => {
      const { userId, postId, likerId } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        const post = user.posts.find(post => post.id === postId);
        if (post) {
          const isLiked = post.likes.some(like => like.userId === likerId);
          if (isLiked) {
            console.log('%c jordan remove like', isLiked, post.likes);
          } else {
            console.log('%c jordan add like', isLiked, post.likes);
          }
        }
      }
    },
    removeLikeFromUserPost: (
      state,
      action: PayloadAction<{ userId: string; postId: string }>,
    ) => {
      const { userId, postId } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        // Реализуйте логику удаления лайка с поста пользователя
        // user можно использовать для получения данных о пользователе, чей пост убираем лайк
      }
    },
    askQuestionToUser: (
      state,
      action: PayloadAction<{ userId: string; question: Question }>,
    ) => {
      const { userId, question } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        // Реализуйте логику отправки вопроса другому пользователю
        // user можно использовать для получения данных о пользователе, которому отправляем вопрос
      }
    },
  },
});

export const {
  setUsers,
  followUser,
  unfollowUser,
  addLikeToUserPost,
  removeLikeFromUserPost,
  askQuestionToUser,
} = usersSlice.actions;
export default usersSlice.reducer;
