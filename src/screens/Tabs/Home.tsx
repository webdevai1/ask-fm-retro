import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { Box } from '../../legos';
import { Header } from './Header';
import { ScreenProps } from '../types';
import { Post } from '../../components/Post/Post';
import { useExtendedPosts } from '../../features/users/userSelectors';

export const HomeScreen: FC<ScreenProps> = () => {
  const posts = useExtendedPosts();

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100%"
      backgroundColor="white">
      <Header title="Wall" position="absolute" />

      <Box marginTop={100}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Post
              answer={item.answer || ''}
              date={item.date}
              likes={item.likes}
              photo={item.photo}
              id={item.id}
              question={item.question}
              user={item.user}
            />
          )}
          keyExtractor={item => `${item.id}-${item.date}-${item.question}`}
        />
      </Box>
    </Box>
  );
};
