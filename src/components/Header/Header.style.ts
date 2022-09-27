import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.main};
  padding: ${({theme}) => theme.screen.rem(1)}px;
`;
