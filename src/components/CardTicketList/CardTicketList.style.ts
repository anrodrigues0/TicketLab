import styled from 'styled-components/native';

export const ListContainer = styled.View`
  margin-top: ${({theme}) => theme.screen.rem(0.5)}px;
`;

export const TextContainer = styled.View`
  padding-left: ${({theme}) => theme.screen.rem(1.1)}px;
  padding-right: ${({theme}) => theme.screen.rem(1.1)}px;
`;

export const ListCardTicket = styled.FlatList.attrs({
  contentContainerStyle: {paddingLeft: 20},
})``;
