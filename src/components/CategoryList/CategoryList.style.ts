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
  padding-horizontal: ${({theme}) => theme.screen.rem(0.25)}px;
`;

export const ContainerText = styled.View`
  padding-left: ${({theme}) => theme.screen.rem(1.1)}px;
  padding-bottom: ${({theme}) => theme.screen.rem(1.1)}px;
`;
