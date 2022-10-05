import styled from 'styled-components/native';

type TextStyledProps = {
  color: string;
};

export const Text = styled.Text<TextStyledProps>`
  font-size: ${({theme}) => theme.screen.rem(1.1)};
  color: ${({theme, color}) => (color ? color : theme.colors.black)};
  font-weight: 600;
`;
