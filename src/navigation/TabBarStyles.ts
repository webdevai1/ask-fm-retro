import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';
import { theme } from '../utils';

const windowWidth = Dimensions.get('window').width;

const TAB_BAR_WIDTH = windowWidth / 4;
const ANIMATED_PART_HEIGHT = 3;

export const Container = styled.View`
  flex-direction: column;
  border-top-color: ${theme.colors.primary};
  border-top-width: 0.5px;
  background-color: #fff;
  height: 80px;
`;

export const InnerView = styled.View`
  width: ${TAB_BAR_WIDTH}px;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 50px;
`;

export const AnimatedView = styled(Animated.View)`
  width: ${TAB_BAR_WIDTH}px;
  height: ${ANIMATED_PART_HEIGHT}px;
  background-color: ${theme.colors.btnLime};
`;

export const AnimatedWrapper = styled.View`
  width: ${TAB_BAR_WIDTH}px;
  align-items: center;
  justify-content: center;
`;
