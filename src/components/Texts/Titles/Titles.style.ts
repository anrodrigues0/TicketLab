import styled from 'styled-components/native';
import {SelectSizeTitle, SizesTitleType} from '@/utils/selectSizeTexts';

type TextStyledProps = {
  color: string;
  size: SizesTitleType;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text<TextStyledProps>`
  font-size: ${({size, theme}) => SelectSizeTitle(size, theme)}px;
  color: ${({theme, color}) => (color ? color : theme.colors.black)};
  font-weight: 600;
`;
