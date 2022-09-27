import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

type progressPropsStyle = {
  color?: string;
};

export const Container = styled.View`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const Progress = styled(Animated.View)<progressPropsStyle>`
  height: ${({theme}) => theme.screen.rem(0.4)}px;
  background-color: ${({color}) => (color ? color : 'white')};
`;
