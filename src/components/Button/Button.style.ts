import styled from 'styled-components/native';
import {theme as themeApp} from '@/themes/themes';
import {SelectedSizeFactory} from '@/utils/selectSizeTexts';

export type SizesType = {
  large: number;
  small: number;
};

type ButtonPropsStyle = {
  colors: keyof typeof themeApp.colors;
  size: keyof SizesType;
};

type ButtonLabelPropsStyle = {
  colorTexts: keyof typeof themeApp.colors;
  disabledBoldText: boolean;
};

const sizes = {
  large: 1,
  small: 0.45,
};

export const ButtonContainer = styled.Pressable<ButtonPropsStyle>`
  background-color: ${({theme, colors}) => theme.colors[colors]};
  padding: ${({theme, size}) =>
    theme.screen.rem(SelectedSizeFactory({sizes, size, defaultSize: 0.8}))}px;
  border-radius: ${({theme}) => theme.screen.rem(0.5)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Label = styled.Text<ButtonLabelPropsStyle>`
  font-size: ${({theme}) => theme.screen.rem(0.85)}px;
  color: ${({theme, colorTexts}) => theme.colors[colorTexts]};
  font-weight: ${({disabledBoldText}) =>
    disabledBoldText ? 'normal' : 'bold'};
`;

export const IconContainer = styled.View`
  margin-left: ${({theme}) => theme.screen.rem(1)}px;
`;
