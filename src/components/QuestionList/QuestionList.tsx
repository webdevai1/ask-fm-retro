import React, { FC } from 'react';
import { Box } from '../../legos';
import { Question } from '../../app/mockTypes';
import { Text } from '../../legos'; // Import Text from the correct package
import { format } from 'date-fns';

type QuestionListProps = {
  item: Question;
};

export const QuestionList: FC<QuestionListProps> = ({ item }) => {
  const date = new Date();
  return (
    <Box flexDirection="row" alignItems="center" paddingVertical={16}>
      <Box
        height={3}
        width={3}
        padding={19}
        borderRadius={100}
        marginRight={8}
        alignItems="center"
        justifyContent="center"
        backgroundColor="grayLight">
        <Text>🙈</Text>
      </Box>
      <Box>
        {item.author ? (
          <Text fontSize={14} fontWeight={700}>
            {item.author}
          </Text>
        ) : null}
        <Text fontSize={12} fontWeight={400}>
          {item.question}
        </Text>
        <Text fontSize={10} fontWeight={300}>
          {format(new Date(date), 'dd MMMM yyyy')}
        </Text>
      </Box>
    </Box>
  );
};
