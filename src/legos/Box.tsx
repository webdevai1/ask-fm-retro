import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styled from 'styled-components';
import { ColorType, parseStyledSize, theme } from '../utils';

export interface BoxProps extends ViewProps {
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-evenly'
    | 'space-between';
  flex?: number;
  zIndex?: number;
  opacity?: number;
  minWidth?: number | string;
  absolute?: boolean;
  minHeight?: number;
  elevation?: number;
  borderWidth?: number;
  borderStyle?: string;
  top?: string | number;
  borderRadius?: number;
  shadowOffset?: string;
  shadowRadius?: number;
  left?: string | number;
  shadowOpacity?: number;
  right?: string | number;
  borderTopWidth?: number;
  width?: string | number;
  maxWidth?: string | number;
  shadowColor?: ColorType;
  borderColor?: ColorType;
  borderLeftWidth?: number;
  bottom?: string | number;
  height?: string | number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  backgroundColor?: ColorType;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  margin?: number | string | 'auto';
  padding?: number | string | 'auto';
  marginTop?: number | string | 'auto';
  paddingTop?: number | string | 'auto';
  marginLeft?: number | string | 'auto';
  marginRight?: number | string | 'auto';
  paddingLeft?: number | string | 'auto';
  paddingRight?: number | string | 'auto';
  marginBottom?: number | string | 'auto';
  paddingBottom?: number | string | 'auto';
  paddingHorizontal?: number | string | 'auto';
  paddingVertical?: number | string | 'auto';
  overflow?: 'visible' | 'hidden' | 'scroll';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignSelf?: 'center' | 'stretch' | 'baseline' | 'flex-end' | 'flex-start';
  alignItems?: 'center' | 'stretch' | 'baseline' | 'flex-end' | 'flex-start';
}

const StyledBox = styled(View)<BoxProps>`
  ${({
    top,
    flex,
    left,
    width,
    right,
    margin,
    height,
    bottom,
    zIndex,
    padding,
    opacity,
    flexWrap,
    absolute,
    overflow,
    minWidth,
    marginTop,
    elevation,
    alignSelf,
    maxWidth,
    minHeight,
    paddingTop,
    marginLeft,
    alignItems,
    paddingLeft,
    marginRight,
    borderWidth,
    borderColor,
    shadowColor,
    paddingRight,
    marginBottom,
    borderRadius,
    borderStyle,
    shadowOffset,
    shadowRadius,
    paddingBottom,
    flexDirection,
    shadowOpacity,
    borderTopWidth,
    justifyContent,
    borderLeftWidth,
    backgroundColor,
    paddingVertical,
    borderRightWidth,
    paddingHorizontal,
    borderBottomWidth,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  }) => `
    ${flex ? `flex: ${flex}` : ''};
    ${zIndex ? `z-index: ${zIndex}` : ''};
    ${opacity ? `opacity: ${opacity}` : ''};
    ${absolute ? 'position: absolute' : ''};
    ${padding ? `padding: ${padding}px` : ''};
    ${overflow ? `overflow: ${overflow}` : ''};
    ${flexWrap ? `flex-wrap: ${flexWrap}` : ''};
    ${top ? `top: ${parseStyledSize(top)}` : ''};
    ${elevation ? `elevation: ${elevation}` : ''};
    ${left ? `left: ${parseStyledSize(left)}` : ''};
    ${alignSelf ? `align-items: ${alignSelf}` : ''};
    ${alignItems ? `align-items: ${alignItems}` : ''};
    ${right ? `right: ${parseStyledSize(right)}` : ''};
    ${borderStyle ? `border-style: ${borderStyle}` : ''};
    ${bottom ? `bottom: ${parseStyledSize(bottom)}` : ''};
    ${margin ? `margin: ${parseStyledSize(margin)}` : ''};
    width: ${width ? parseStyledSize(width) : 'auto'};
    maxWidth: ${maxWidth ? parseStyledSize(maxWidth) : 'auto'};
    ${borderWidth ? `border-width: ${borderWidth}px` : ''};
    ${shadowOffset ? `shadow-offset: ${shadowOffset}` : ''};
    ${padding ? `padding: ${parseStyledSize(padding)}` : ''};
    height: ${height ? parseStyledSize(height) : 'auto'};
    ${shadowRadius ? `shadow-radius: ${shadowRadius}px` : ''};
    ${borderRadius ? `border-radius: ${borderRadius}px` : ''};
    ${shadowOpacity ? `shadow-opacity: ${shadowOpacity}` : ''};
    ${flexDirection ? `flex-direction: ${flexDirection}` : ''};
    ${minWidth ? `min-width: ${parseStyledSize(minWidth)}` : ''};
    ${justifyContent ? `justify-content: ${justifyContent}` : ''};
    ${marginTop ? `margin-top: ${parseStyledSize(marginTop)}` : ''};
    ${borderTopWidth ? `border-top-width: ${borderTopWidth}px` : ''};
    ${marginLeft ? `margin-left: ${parseStyledSize(marginLeft)}` : ''};
    ${
      paddingTop || paddingVertical
        ? `padding-top: ${parseStyledSize(paddingTop || paddingVertical || 0)}`
        : ''
    };
    ${borderLeftWidth ? `border-left-width: ${borderLeftWidth}px` : ''};
    ${
      paddingLeft || paddingHorizontal
        ? `padding-left: ${parseStyledSize(
            paddingLeft || paddingHorizontal || 0,
          )}`
        : ''
    };
    ${marginRight ? `margin-right: ${parseStyledSize(marginRight)}` : ''};
    ${borderRightWidth ? `border-right-width: ${borderRightWidth}px` : ''};
    ${
      paddingRight || paddingHorizontal
        ? `padding-right: ${parseStyledSize(
            paddingRight || paddingHorizontal || 0,
          )}`
        : ''
    };
    ${marginBottom ? `margin-bottom: ${parseStyledSize(marginBottom)}` : ''};
    ${borderRadius ? `border-radius: ${parseStyledSize(borderRadius)}` : ''};
    ${minHeight ? `min-height: ${parseStyledSize(minHeight)}` : ''};
    ${borderBottomWidth ? `border-bottom-width: ${borderBottomWidth}px` : ''};
    ${
      paddingBottom || paddingVertical
        ? `padding-bottom: ${parseStyledSize(
            paddingBottom || paddingVertical || 0,
          )}`
        : ''
    };
    ${
      borderBottomLeftRadius
        ? `border-bottom-left-radius: ${borderBottomLeftRadius}px`
        : ''
    };
    ${
      borderBottomRightRadius
        ? `border-bottom-right-radius: ${borderBottomRightRadius}px`
        : ''
    };
    ${
      backgroundColor
        ? `background-color: ${
            theme.colors[backgroundColor] || backgroundColor
          }`
        : ''
    };
    ${
      borderTopLeftRadius
        ? `border-top-left-radius: ${borderTopLeftRadius}px`
        : ''
    };
    ${
      shadowColor
        ? `shadow-color: ${theme.colors[shadowColor] || shadowColor}`
        : ''
    };
    ${
      borderColor
        ? `border-color: ${theme.colors[borderColor] || borderColor}`
        : ''
    };
    ${
      borderTopRightRadius
        ? `border-top-right-radius: ${borderTopRightRadius}px`
        : ''
    };
    `}
`;

export const Box: FC<BoxProps> = props => <StyledBox {...props} />;
