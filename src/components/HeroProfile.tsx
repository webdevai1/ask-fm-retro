import React, { FC } from 'react';
import { Image, ImageBackground } from 'react-native';
import { Box, Text } from '../legos';

type HeroProfileProps = {
  avatarURL: string;
  backgroundURL: string;
  name: string;
  username: string;
};

export const HeroProfile: FC<HeroProfileProps> = ({
  avatarURL,
  backgroundURL,
  name,
  username,
}) => {
  return (
    <Box height={250}>
      <ImageBackground
        source={{ uri: avatarURL }}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <Box
          style={{ position: 'relative' }}
          flexDirection="row"
          justifyContent="space-between">
          <Image
            source={{ uri: backgroundURL }}
            style={{
              left: 10,
              bottom: -60,
              width: 120,
              height: 120,
              borderRadius: 100,
              position: 'absolute',
            }}
          />
          <Box marginLeft={180} justifyContent="flex-end">
            <Text
              fontSize={20}
              fontWeight={700}
              style={{ paddingTop: 10 }}
              color="white">
              {name}
            </Text>
            <Text fontSize={18} fontWeight={400} style={{ paddingVertical: 5 }}>
              {username}
            </Text>
          </Box>
        </Box>
      </ImageBackground>
    </Box>
  );
};
