import React from 'react';

import { Box, LikeIcon, Text } from '../../legos';
import { Pressable } from 'react-native';
import { SettingsIcon } from '../../legos/icons/SettingsIcon';

type HeaderType = {
  isGoBack?: boolean;
  title?: string;
  position?: 'absolute' | 'relative' | undefined;
  handleLogout?: () => void;
};

export const Header = ({
  isGoBack,
  title,
  position,
  handleLogout,
}: HeaderType) => {
  return (
    <Box
      flexDirection="row"
      paddingHorizontal={8}
      alignItems="flex-end"
      backgroundColor="primary"
      height={100}
      width="100%"
      style={{ position: position, top: 0 }}>
      <Box
        flexDirection="row"
        paddingHorizontal={16}
        justifyContent="space-between"
        height={40}
        width="100%">
        <Text color="white" fontSize={20} fontWeight={700} lineHeight={30}>
          {title}
        </Text>
        <Box flexDirection="row">
          <Pressable>
            <LikeIcon />
          </Pressable>
          {handleLogout ? (
            <Pressable style={{ paddingLeft: 12 }} onPress={handleLogout}>
              <SettingsIcon size={25} color="white" fill="#274C67" />
            </Pressable>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
