import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const ScrollView = styled(Animated.ScrollView)`
  background-color: white;
`;

export const AnimatedHeaderContainer = styled(Animated.View)`
  background-color: ${({theme}) => theme.colors.main};
`;
