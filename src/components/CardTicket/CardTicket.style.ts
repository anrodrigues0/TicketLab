import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {Shadow} from 'react-native-shadow-2';

export const Container = styled(Shadow)`
  background-color: ${({theme}) => theme.colors.main_110};
  border-radius: ${({theme}) => theme.screen.rem(0.55)}px;
  height: ${({theme}) => theme.screen.rem(16.2)}px;
  width: ${({theme}) => theme.screen.rem(8.1)}px;
  margin-right: ${({theme}) => theme.screen.rem(0.8)}px;
  justify-content: space-between;
`;

export const ImageBackground = styled.Image.attrs({
  blurRadius: 8,
})`
  height: 100%;
  width: 100%;
  opacity: 0.2;
`;

export const ContainerContent = styled.View`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const ContainerCategory = styled.View`
  width: 100%;
  padding: ${({theme}) => theme.screen.rem(0.5)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const ContainerImage = styled.View`
  margin-left: ${({theme}) => theme.screen.rem(0.3)}px;
  margin-right: ${({theme}) => theme.screen.rem(0.3)}px;
  height: ${({theme}) => theme.screen.rem(5)}px;
`;

export const Image = styled(FastImage)`
  width: 100%;
  height: 100%;
  border-radius: ${({theme}) => theme.screen.rem(0.3)}px;
`;

export const InformationContainer = styled.View`
  margin-top: ${({theme}) => theme.screen.rem(0.45)}px;
  margin-left: ${({theme}) => theme.screen.rem(0.3)}px;
  margin-right: ${({theme}) => theme.screen.rem(0.3)}px;
`;

export const PriceContainer = styled.View`
  margin-top: ${({theme}) => theme.screen.rem(0.5)}px;
  justify-content: space-between;
`;

export const Button = styled.Pressable`
  align-items: center;
  background-color: ${({theme}) => theme.colors.success};
  width: 100%;
  margin-top: ${({theme}) => theme.screen.rem(0.5)}px;
  margin-bottom: ${({theme}) => theme.screen.rem(0.5)}px;
  padding: ${({theme}) => theme.screen.rem(0.5)}px;
  border-radius: ${({theme}) => theme.screen.rem(0.2)}px;
`;
