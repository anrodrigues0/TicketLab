import styled from 'styled-components/native';

type DotPropsStyle = {
  active: boolean;
};

type LimitDotsPropsStyle = {
  size: number;
};

export const DotContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${({theme}) => theme.screen.rem(0.3)}px;
`;

export const LimitDots = styled.View<LimitDotsPropsStyle>`
  width: 112px;
  overflow: hidden;
  flex-direction: row;
  justify-content: ${({size}) => (size > 6 ? 'flex-start' : 'center')};
`;

export const Dot = styled.View<DotPropsStyle>`
  width: 9px;
  height: 9px;
  border-radius: ${({theme}) => theme.screen.rem(1)}px;
  margin-left: 5px;
  border: 1px solid ${({theme}) => theme.colors.secondary};
  background-color: ${({active, theme}) =>
    !active ? 'transparent' : theme.colors.secondary};
`;
