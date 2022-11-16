import styled from 'styled-components/native';
import {theme as themeApp} from '@/themes/themes';

type ButtonPropsStyle = {
  colors: keyof typeof themeApp.colors;
};

export const Button = styled.Pressable<ButtonPropsStyle>`
  padding: ${({theme}) => theme.screen.rem(0.4)}px;
  border-radius: ${({theme}) => theme.screen.rem(5)}px;
  background-color: ${({theme, colors}) => theme.colors[colors]};
`;
