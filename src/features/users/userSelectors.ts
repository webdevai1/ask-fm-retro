import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { RootState } from '../../app/store';
import { Post as PostType, User } from '../../app/mockTypes';

const selectUsers = (state: RootState) => state.users.users;

type Post = PostType & {
  user: {
    id: string;
    username: string;
    avatar: string;
  };
  isMyPost?: boolean;
};

export const useExtendedPosts = (): Post[] => {
  const selectExtendedPosts = createSelector(selectUsers, users =>
    users.flatMap(user =>
      user.posts.map(post => ({
        ...post,
        user: {
          id: user.id,
          username: user.username,
          avatar: user.avatar,
        },
      })),
    ),
  );

  const posts = useSelector(selectExtendedPosts);
  return posts;
};

export const useUserById = (id: string): User | undefined => {
  const selectExtendedPosts = createSelector(selectUsers, users =>
    users.find(u => u.id === id),
  );

  const user = useSelector(selectExtendedPosts) || undefined;
  return user;
};
