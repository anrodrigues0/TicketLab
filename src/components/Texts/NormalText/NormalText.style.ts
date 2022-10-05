import styled, {DefaultTheme} from 'styled-components/native';

export type FontSizeType = 'large' | 'small';

type TextStyledProps = {
  color: string;
  size?: FontSizeType;
  strong?: boolean;
};
const SelectSize = (size: FontSizeType, theme: DefaultTheme) => {
  const sizes = {
    small: theme.screen.rem(0.65),
    large: theme.screen.rem(1),
  };

  return sizes[size];
};

export const Text = styled.Text<TextStyledProps>`
  font-size: ${({theme, size}) =>
    size ? SelectSize(size, theme) : theme.screen.rem(0.75)}px;
  color: ${({theme, color}) => (color ? color : theme.colors.black)};
  font-weight: ${({strong}) => (strong ? 600 : 'normal')};
`;
