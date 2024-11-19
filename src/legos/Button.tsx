import { Text, Pressable, PressableProps } from 'react-native';
import React, { ReactNode } from 'react';

import { Box } from '../legos';
import { ColorType, theme } from '../utils';

export interface ButtonProps extends PressableProps {
  onPress: () => void;
  width?: number | string;
  title: string;
  bgColor?: ColorType;
  type?: 'background' | 'text' | 'icon' | undefined;
  textDecorationLine?: 'underline' | 'none';
  colorTitle?: ColorType;
  icon?: () => ReactNode;
}

export const Button = ({
  onPress,
  width,
  title,
  bgColor,
  type = 'background',
  textDecorationLine = 'none',
  colorTitle,
  icon,
  ...props
}: ButtonProps) => {
  if (type === 'icon') {
    return (
      <Pressable onPress={onPress}>
        <Box width={width}>{icon?.()}</Box>
      </Pressable>
    );
  }
  if (type === 'text') {
    return (
      <Pressable onPress={onPress}>
        <Box width={width}>
          <Text
            style={{
              color: theme.colors[colorTitle || 'white'],
              fontSize: 16,
              fontWeight: '500',
              textDecorationStyle: 'solid',
              textDecorationLine: textDecorationLine,
            }}>
            {title}
          </Text>
        </Box>
      </Pressable>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: theme.colors[bgColor || 'btnLime'],
        borderRadius: 5,
        ...props,
      }}>
      <Box
        width={width}
        justifyContent="center"
        paddingVertical={10}
        paddingHorizontal={20}
        alignItems="center">
        <Text
          style={{
            color: theme.colors[colorTitle || 'white'],
            fontSize: 18,
            fontWeight: '700',
          }}>
          {title}
        </Text>
      </Box>
    </Pressable>
  );
};
