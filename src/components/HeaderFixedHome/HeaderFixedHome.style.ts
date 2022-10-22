import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  border: 1px solid red;
  height: ${Dimensions.get('window').scale * 30}px;
`;

export const HigherContainer = styled.View``;
