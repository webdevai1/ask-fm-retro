import React, { FC } from 'react';

import { Box } from '../../legos';
import { Header } from './Header';
import { ScreenProps } from '../types';
import { useAppSelector } from '../../app/hooks';
import { QuestionList } from '../../components/QuestionList/QuestionList';
import { FlatList } from 'react-native';

export const QuestionsScreen: FC<ScreenProps> = () => {
  const questions = useAppSelector(state => state.questions.value);

  return (
    <Box height="100%" width={'100%'} backgroundColor="white">
      <Header title="Questions" position="absolute" />

      <Box marginTop={100} height="100%" paddingHorizontal={24}>
        <FlatList
          data={questions}
          renderItem={({ item }) => <QuestionList item={item} />}
          keyExtractor={item => item.question}
        />
      </Box>
    </Box>
  );
};
