import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const DotsIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    viewBox="0 0 20 20"
    {...props}>
    <Circle cx="4" cy="10" r="2" />
    <Circle cx="10" cy="10" r="2" />
    <Circle cx="16" cy="10" r="2" />
  </Svg>
);
