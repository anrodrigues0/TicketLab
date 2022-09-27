import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Button = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Ellipse = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  width: ${({theme}) => theme.screen.rem(1.2)}px;
  height: ${({theme}) => theme.screen.rem(1.2)}px;
  border-radius: ${({theme}) => theme.screen.rem(1)}px;
  left: ${({theme}) => theme.screen.rem(0.7)}px;
  top: ${({theme}) => theme.screen.rem(0.5)}px;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const EllipseText = styled.Text`
  font-size: ${({theme}) => theme.screen.rem(0.65)}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;
