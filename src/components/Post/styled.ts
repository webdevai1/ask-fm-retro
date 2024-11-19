import styled from 'styled-components/native';
import { theme } from '../../utils';

export const Container = styled.View`
  padding: 10px 10px 0 10px;
  border-bottom-width: 0.2px;
  border-color: ${theme.colors.grayDark};
  border-style: solid;
`;

export const HeaderText = styled.Text`
  padding-top: 10px;
  padding-bottom: 5px;
  font-weight: 700;
`;

export const DateText = styled.Text`
  padding-bottom: 10px;
  color: ${() => theme.colors.grayDark};
  font-size: 10px;
`;

export const ShowMoreText = styled.Text`
  margin-top: 10px;
  color: ${() => theme.colors.grayDark};
  font-size: 12px;
`;

export const BottomContainer = styled.View`
  height: 50px;
  padding: 0px 5px 0px 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
