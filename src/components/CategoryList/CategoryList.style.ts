import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Image = styled(FastImage)`
  width: ${({theme}) => theme.screen.rem(5.1)}px;
  height: ${({theme}) => theme.screen.rem(5.1)}px;
  border-radius: ${({theme}) => theme.screen.rem(5.1)}px;
  margin-left: ${({theme}) => theme.screen.rem(1)}px;
`;

export const ContainerImage = styled.View`
  flex-direction: row;
`;

export const ContainerText = styled.View`
  padding-left: ${({theme}) => theme.screen.rem(1.1)}px;
  padding-bottom: ${({theme}) => theme.screen.rem(1.1)}px;
`;

export const ContainerTextButton = styled.View`
  width: 100%;
  padding-top: ${({theme}) => theme.screen.rem(1.2)}px;
  align-items: center;
`;

export const ContainerNameCategory = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: ${({theme}) => theme.screen.rem(1.2)}px;
  margin-top: ${({theme}) => theme.screen.rem(0.5)}px;
  width: ${({theme}) => theme.screen.rem(5)}px;
`;
