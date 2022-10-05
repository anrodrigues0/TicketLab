import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {Shadow} from 'react-native-shadow-2';

export const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
  align-items: center;
  margin-bottom: ${({theme}) => theme.screen.rem(0.5)}px;
`;

export const ShadowContainer = styled(Shadow).attrs({
  distance: 8,
})`
  width: ${Dimensions.get('window').width / 1.07}px;
  border-radius: ${({theme}) => theme.screen.rem(0.7)}px;
`;
export const Image = styled(FastImage)`
  width: 100%;
  height: ${({theme}) => theme.screen.rem(10, true)}px;
  border-radius: ${({theme}) => theme.screen.rem(0.7, true)}px;
`;

export const ContainerText = styled.View`
  padding-left: ${({theme}) => theme.screen.rem(1.1)}px;
  padding-bottom: ${({theme}) => theme.screen.rem(1)}px;
`;
