import styled from 'styled-components/native';

export const Container = styled.Pressable`
  background-color: white;
  width: 100%;
  height: ${({theme}) => theme.screen.rem(2.3)}px;
  padding: ${({theme}) => theme.screen.rem(0.5)}px;
  border-radius: ${({theme}) => theme.screen.rem(0.3)}px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  height: ${({theme}) => theme.screen.rem(2.2)}px;
  justify-content: center;
`;
