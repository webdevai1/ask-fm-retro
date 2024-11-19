import React, { FC, useState } from 'react';

import {
  Alert,
  Dimensions,
  Image,
  LayoutChangeEvent,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Box, Text } from '../../legos';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ContextMenu from 'react-native-context-menu-view';

import { LikeButton } from '../../legos/LikeButton';
import {
  BottomContainer,
  Container,
  DateText,
  HeaderText,
  ShowMoreText,
} from './styled';
import { Post as PostType } from '../../app/mockTypes';
import { calculateDateDifference } from '../../utils/calculateDateDifference';
import { DotsIcon } from '../../legos/icons/DotsIcon';
import { useAppDispatch } from '../../app/hooks';
import { addLikeToUserPost } from '../../features/users/usersSlice';

export const Post: FC<
  PostType & {
    user: {
      id: string;
      username: string;
      avatar: string;
    };
    isMyPost?: boolean;
  }
> = ({ id, question, answer, photo, likes, date, user, isMyPost }) => {
  const dispatch = useAppDispatch();
  const isUseCollapsed = answer.length <= 300;

  const [isLiked, setIsLiked] = useState(false);
  const [expanded, setExpanded] = useState(isUseCollapsed);
  const [height, setHeight] = useState(isUseCollapsed ? 120 : 100);
  const animatedHeight = useSharedValue(100);

  const win = Dimensions.get('window');
  const ratio = win.width / 341;
  const currentDate = new Date();

  const handleLike = () => {
    setIsLiked(!isLiked);
    dispatch(addLikeToUserPost({ userId: user.id, postId: id, likerId: '1' }));
  };

  const onItemPress = () => {
    setExpanded(!expanded);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const collapsableStyle = useAnimatedStyle(() => {
    animatedHeight.value = expanded ? withTiming(height) : withTiming(90);

    return {
      height: animatedHeight.value,
    };
  }, [expanded]);

  return (
    <Container>
      <HeaderText>
        {question?.question}{' '}
        <Text
          fontSize={10}
          color="grayDark"
          fontWeight={400}
          style={{
            paddingLeft: 8,
          }}>
          {question?.author}
        </Text>
      </HeaderText>
      {isMyPost ? null : (
        <Box flexDirection="row" paddingVertical={16}>
          <Image
            source={{ uri: user.avatar }}
            style={{
              width: 26,
              height: 26,
              borderRadius: 100,
            }}
          />
          <Text
            fontSize={12}
            color="black"
            fontWeight={700}
            style={{
              paddingLeft: 8,
            }}>
            {user?.username}
          </Text>
        </Box>
      )}
      <DateText>
        {calculateDateDifference(currentDate, new Date(date))}
      </DateText>
      {!isUseCollapsed ? (
        <Animated.View style={[collapsableStyle, { overflow: 'hidden' }]}>
          <View style={{ position: 'absolute' }} onLayout={onLayout}>
            <Text textAlign="justify" fontSize={12}>
              {answer}
            </Text>
          </View>
        </Animated.View>
      ) : (
        <Box>
          <Text textAlign="justify" fontSize={12}>
            {answer}
          </Text>
        </Box>
      )}
      {!expanded ? (
        <TouchableWithoutFeedback onPress={onItemPress}>
          <Box>
            <ShowMoreText>View More</ShowMoreText>
          </Box>
        </TouchableWithoutFeedback>
      ) : null}
      {photo ? (
        <Box
          flex={1}
          marginTop={20}
          justifyContent="center"
          alignItems="center">
          <Image
            source={{ uri: photo }}
            style={{
              width: win.width,
              height: 362 * ratio,
            }}
          />
        </Box>
      ) : null}

      <BottomContainer>
        <LikeButton
          onPress={handleLike}
          isLiked={isLiked}
          likeCount={likes?.length || 0}
        />

        <ContextMenu
          actions={[{ title: 'Delete' }]}
          onPress={() => {
            Alert.alert(`Deleted post with id - ${id}`);
          }}>
          <DotsIcon size={30} color="#333" />
        </ContextMenu>
      </BottomContainer>
    </Container>
  );
};
