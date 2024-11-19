import React, { FC } from 'react';

import { Screens, RootStackParamList } from '../navigation';
import { Box, Button } from '../legos';
import { Logo } from '../legos';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Starting
>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
}

export const StartingScreen: FC<ScreenProps> = ({ navigation }) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100%"
      backgroundColor="mainBlue">
      <Box marginBottom={100}>
        <Logo color="white" />
      </Box>
      <Box>
        <Button
          onPress={() => navigation.navigate(Screens.SignUp)}
          title="Sign Up"
          width={300}
          bgColor="btnBlue"
        />
        <Box height={10} />
        <Button
          onPress={() => navigation.navigate(Screens.SignIn)}
          title="Log In"
          width={300}
        />
      </Box>
    </Box>
  );
};
