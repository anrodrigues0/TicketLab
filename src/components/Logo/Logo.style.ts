import styled from 'styled-components/native';

type TextPropsStyle = {
  yellow: boolean;
};

export const Container = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text<TextPropsStyle>`
  font-weight: ${({yellow}) => (yellow ? 800 : 400)};
  color: ${({theme, yellow}) =>
    yellow ? theme.colors.secondary : theme.colors.white};
  font-size: ${({theme}) => theme.screen.rem(1.3)}px;
`;
