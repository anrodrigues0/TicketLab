import styled from 'styled-components/native';

type TextPropsStyle = {
  large: boolean;
};

export const Container = styled.View`
  margin-bottom: ${({theme}) => theme.screen.rem(0.3)}px;
`;

export const Label = styled.Text`
  font-size: ${({theme}) => theme.screen.rem(0.8)}px;
  color: ${({theme}) => theme.colors.gray_120};
  margin-bottom: ${({theme}) => theme.screen.rem(0.15)}px;
`;

export const TextContent = styled.Text<TextPropsStyle>`
  font-size: ${({theme, large}) =>
    large ? theme.screen.rem(1.25) : theme.screen.rem(1)}px;
  color: ${({theme}) => theme.colors.black};
`;
