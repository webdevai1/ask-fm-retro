import React, { FC } from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { LikeIcon } from './icons';
import { Text } from './Text';

type LikeButtonProps = {
  isLiked: boolean;
  onPress: () => void;
  likeCount: number;
};

export const LikeButton: FC<LikeButtonProps> = ({
  isLiked,
  onPress,
  likeCount = 0,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    onPress();

    scale.value = withSpring(1.2, undefined, finished => {
      if (finished) {
        scale.value = withSpring(1);
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Text style={{ paddingHorizontal: 4 }}>{likeCount}</Text>
        <LikeIcon
          name={isLiked ? 'heart' : 'heart-o'}
          size={24}
          color={isLiked ? 'red' : 'black'}
          fill={isLiked ? 'red' : 'white'}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
});
