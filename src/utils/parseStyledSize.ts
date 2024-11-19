import normalize from 'react-native-normalize';

export const parseStyledSize = (
  size: number | string,
  based: 'width' | 'height' = 'width',
): string => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  return size;
};
