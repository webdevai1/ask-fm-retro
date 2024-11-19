import { Box, Text } from '../legos';
import React, { FC } from 'react';

type ProfileStatisticProps = {
  answers: number;
  likes: number;
  gifts: number;
  followers: number;
};

export const ProfileStatistic: FC<ProfileStatisticProps> = ({
  answers = 0,
  likes = 0,
  gifts = 0,
  followers = 0,
}) => {
  return (
    <>
      <Box width={'100%'} height={70} justifyContent="center">
        <Box
          width={150}
          height={30}
          marginLeft={150}
          borderStyle="solid"
          borderColor="gray"
          borderWidth={1}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          backgroundColor="grayLight">
          <Text fontSize={16}>Followers:</Text>
          <Text fontWeight={700}>{followers}</Text>
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        borderStyle="solid"
        borderColor="grayLight"
        borderTopWidth={2}
        borderBottomWidth={2}
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        paddingHorizontal={16}
        height={80}>
        <Box alignItems="center">
          <Text fontSize={18} fontWeight={700}>
            {answers}
          </Text>
          <Text fontWeight={400} color="blue">
            answers
          </Text>
        </Box>
        <Box
          borderColor="grayLight"
          borderStyle="solid"
          borderLeftWidth={2}
          height={40}
        />
        <Box alignItems="center">
          <Text fontSize={18} fontWeight={700}>
            {likes}
          </Text>
          <Text fontWeight={400} color="blue">
            likes
          </Text>
        </Box>
        <Box
          borderColor="grayLight"
          borderStyle="solid"
          borderRightWidth={2}
          height={40}
        />

        <Box alignItems="center">
          <Text fontSize={18} fontWeight={700}>
            {gifts}
          </Text>
          <Text fontWeight={400} color="blue">
            gifts
          </Text>
        </Box>
      </Box>
    </>
  );
};
