import React, { FC } from 'react';
import { Text as TextRN, TextProps } from 'react-native';
import styled from 'styled-components';
import { ColorType, theme } from '../utils';

type FontWeight = 300 | 400 | 700;

interface StyledTextProps extends TextProps {
  color: string;
  fontSize: number;
  textAlign: string;
  fontFamily: string;
  lineHeight: number;
  isUppercase: boolean;
  letterSpacing: number;
  fontWeight: FontWeight;
}

const StyledText = styled(TextRN)<StyledTextProps>`
  font-style: normal;
  font-size: ${({ fontSize }) => fontSize}px;
  text-align: ${({ textAlign }) => textAlign};
  font-family: ${({ fontFamily }) => fontFamily};
  line-height: ${({ lineHeight }) => lineHeight}px;
  color: ${({ color }) => theme.colors[color as ColorType]};
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ isUppercase }) => isUppercase && 'text-transform: uppercase;'}
`;

export interface CustomTextProps extends TextProps {
  fontWeight?: FontWeight;
  letterSpacing?: number;
  isUppercase?: boolean;
  lineHeight?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  fontSize?: number;
  color?: ColorType;
}

export const Text: FC<CustomTextProps> = ({
  children,
  fontSize = 16,
  lineHeight = 18,
  fontWeight = 400,
  textAlign = 'left',
  isUppercase = false,
  color = 'black',
  letterSpacing = 0.75,
  ...props
}) => (
  <StyledText
    {...props}
    color={color}
    fontSize={fontSize}
    textAlign={textAlign}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    isUppercase={isUppercase}
    letterSpacing={letterSpacing}
    fontFamily="Helvetica">
    {children}
  </StyledText>
);
