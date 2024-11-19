import { Text } from 'react-native';
import React from 'react';
import { ColorType, theme } from '../utils';

export const TextError = ({
  text,
  color,
}: {
  text: string;
  color?: ColorType;
}) => {
  return (
    <Text
      style={{
        color: color ? theme.colors[color] : 'white',
        letterSpacing: 1.1,
        fontSize: 13,
        fontWeight: 'normal',
      }}>
      {text}
    </Text>
  );
};
