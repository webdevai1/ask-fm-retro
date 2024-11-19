import React, { FC, Ref } from 'react';
import styled from 'styled-components';
import normalize from 'react-native-normalize';
import { ScrollView as ScrollViewComp, ScrollViewProps } from 'react-native';
import { ColorType, theme } from '../utils';

interface Props extends ScrollViewProps {
  flex?: number;
  zIndex?: number;
  height?: string | number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  backgroundColor?: ColorType;
  innerRef?: Ref<ScrollViewComp>;
}

const StyledScrollView = styled(ScrollViewComp)<Props>`
  ${({ flex, backgroundColor }) => `
    ${flex ? `flex: ${flex}` : ''};
    
    ${`background-color: ${
      backgroundColor ? theme.colors[backgroundColor] : 'white'
    }`};
    `}
`;

export const ScrollView: FC<Props> = ({
  innerRef,
  zIndex,
  children,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingVertical,
  paddingHorizontal,
  ...props
}) => (
  <StyledScrollView
    {...props}
    zIndex={zIndex}
    ref={innerRef}
    contentContainerStyle={{
      backgroundColor: theme.colors.white,
      paddingLeft:
        paddingLeft || paddingHorizontal
          ? normalize(paddingLeft || paddingHorizontal || 0)
          : 0,
      paddingBottom:
        paddingBottom || paddingVertical
          ? normalize(paddingBottom || paddingVertical || 0)
          : 0,
      paddingTop:
        paddingTop || paddingVertical
          ? normalize(paddingTop || paddingVertical || 0)
          : 0,
      paddingRight:
        paddingRight || paddingHorizontal
          ? normalize(paddingRight || paddingHorizontal || 0)
          : 0,
    }}>
    {children}
  </StyledScrollView>
);
