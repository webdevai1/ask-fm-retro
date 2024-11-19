export interface DefaultColor {
  colors: {
    [key in ColorType]: string;
  };
}

export const theme: DefaultColor = {
  colors: {
    blue: '#09BAF6',
    blueRGBA: 'rgba(9,186,246,1)',

    blueLight: '#EDFAFF',

    navy: '#032080',
    navyRGBA: 'rgba(3,32,128,1)',
    mainBlue: '#274C67',
    btnBlue: '#00aaff',
    gray: '#E2E2E2',
    grayRGBA: 'rgba(226, 226, 226, 1)',
    btnLime: '#80BD37',
    grayLight: '#F2F2F2',
    grayDark: '#808080',
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    red: '#AA2525',
    green: '#27AE60',
    logoBack: '#eaeaea',
    primary: '#274C67',
  },
};

export type ColorType =
  | 'blue'
  | 'blueRGBA'
  | 'blueLight'
  | 'mainBlue'
  | 'navy'
  | 'navyRGBA'
  | 'gray'
  | 'grayRGBA'
  | 'grayLight'
  | 'grayDark'
  | 'white'
  | 'black'
  | 'transparent'
  | 'green'
  | 'btnLime'
  | 'logoBack'
  | 'btnBlue'
  | 'red'
  | 'primary';
