import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.main_110};
  font-size: ${({theme}) => theme.screen.rem(0.9)}px;
  text-decoration: underline;
`;
