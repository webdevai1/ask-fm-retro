import React, { FC, useState } from 'react';
import {
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

import { Text } from './Text';
import { theme } from '../utils';
import { Box } from './Box';

type InputType = 'underline' | 'outline';

interface Props extends TextInputProps {
  error?: string;
  label?: string;
  // labelIcon?: IconsNames;
  width?: string | number;
  type?: InputType;
}

import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

const getBorderColor = (focus: boolean, type: InputType) => {
  if (focus) {
    return 'blue';
  }
  return type === 'outline' ? 'gray' : 'navy';
};

export const Input: FC<Props> = ({
  label,
  // labelIcon,
  error,
  onBlur,
  onFocus,
  width = '100%',
  type = 'underline',
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const onFocusHandle = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);

    if (typeof onFocus === 'function') {
      onFocus(e);
    }
  };

  const onBlurHandle = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);

    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  const getLabel = () => {
    return (
      <>
        <Text fontSize={14} color={focus ? 'blue' : 'navy'} lineHeight={32}>
          {label ?? ''}
        </Text>
      </>
    );
  };

  return (
    <Box
      borderColor={error ? 'red' : 'white'}
      width="100%"
      backgroundColor="white"
      paddingHorizontal={type === 'outline' ? 20 : 0}
      borderRadius={4}
      borderWidth={1}
      paddingVertical={isIOS ? 16 : 0}>
      {type === 'underline' ? (
        <Box marginTop={-10} flexDirection="row" alignItems="center">
          {getLabel()}
        </Box>
      ) : null}
      <TextInput
        {...props}
        onBlur={onBlurHandle}
        onFocus={onFocusHandle}
        placeholderTextColor={theme.colors.grayDark}
        style={[
          {
            width: '100%',
            flex: 1,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 18,
            fontFamily: 'Helvetica',
          },
        ]}
      />
      {error ? (
        <Box
          absolute
          bottom={-20}
          paddingHorizontal={type === 'outline' ? 20 : 0}>
          <Text fontSize={13} color="white">
            {error}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};
