import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${({theme}) => theme.screen.rem(1.2)}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.black};
`;
