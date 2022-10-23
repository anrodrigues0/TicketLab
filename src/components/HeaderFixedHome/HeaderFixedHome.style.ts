import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  height: ${Dimensions.get('window').scale * 40}px;
  padding-horizontal: ${({theme}) => theme.screen.rem(1)}px;
  justify-content: space-around;
`;

export const HigherContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserContainerInformation = styled.View`
  margin-left: ${({theme}) => theme.screen.rem(0.5)}px;
`;
