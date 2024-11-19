import { Box } from '../Box';
// import { Box } from 'legos/Box';
import React, { FC, useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({
  items,
  value,
  label,
  onChange,
  placeholder,
  styleContainer,
  color = 'navy',
  type = 'outline',
  isCenterAlignText,
  error,
}) => {
  const [selectValue, setSelectValue] = useState<any | undefined>();

  const handlerDownButtonPicker = () => {
    if (selectValue) {
      onChange(selectValue);
    }
  };

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  return (
    <Box
      height={38}
      borderRadius={type === 'outline' ? 4 : 0}
      {...(type === 'outline' ? { borderWidth: 1 } : { borderBottomWidth: 1 })}
      borderColor={color}
      marginTop={20}
      {...styleContainer}>
      {label ? (
        <Box absolute top={-16}>
          {/* <Text fontSize={14} lineHeight={18} color={color}>
            {label}
          </Text> */}
        </Box>
      ) : null}
      <Box flex={1} alignItems="center" justifyContent="center">
        {/* <Box absolute right={10} justifyContent="center" height="100%">
          <Icon
            icon="arrowDown"
            width={12}
            height={12}
            color={type === 'outline' ? 'black' : color}
          />
        </Box> */}
        <RNPickerSelect
          onClose={handlerDownButtonPicker}
          onDonePress={handlerDownButtonPicker}
          onValueChange={newValue => {
            setSelectValue(newValue);
          }}
          placeholder={placeholder}
          value={selectValue}
          items={items}
          style={{
            inputIOS: {
              fontSize: 14,
              color,
              fontWeight: '400',
              textAlign: isCenterAlignText ? 'center' : 'left',
              height: '100%',
            },
            modalViewMiddle: {
              backgroundColor: 'white',
            },
            chevronDown: {
              display: 'none',
            },
            chevronUp: {
              display: 'none',
            },
            modalViewBottom: {
              backgroundColor: 'white',
            },
          }}
        />
      </Box>
      <Box absolute bottom={-20}>
        {/* <Text fontSize={14} color="red">
          {error}
        </Text> */}
      </Box>
    </Box>
  );
};
