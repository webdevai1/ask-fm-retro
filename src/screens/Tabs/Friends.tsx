import React, { FC } from 'react';

import { Text, Box } from '../../legos';
import { Header } from './Header';
import { ScreenProps } from '../types';

export const FriendsScreen: FC<ScreenProps> = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100%"
      backgroundColor="white">
      <Header title="Friends" position="absolute" />
      <Box>
        <Text>Friends SCREEN</Text>
      </Box>
    </Box>
  );
};
