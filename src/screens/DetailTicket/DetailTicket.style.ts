import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

import Faether from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

type IconPropsStyle = {
  isWhite?: boolean;
};

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {flexGrow: 1},
  bounces: false,
})`
  background-color: ${({theme}) => theme.colors.white};
`;

export const HeaderContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.View`
  flex: 2;
  background-color: ${({theme}) => theme.colors.main_110};
  margin-bottom: ${({theme}) => theme.screen.rem(1.2)}px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding-horizontal: ${({theme}) => theme.screen.rem(1)}px;
`;

export const InformationContainer = styled.View`
  margin-bottom: ${({theme}) => theme.screen.rem(1.1)}px;
`;

export const FavoriteContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View`
  margin-bottom: ${({theme}) => theme.screen.rem(0.8)}px;
  margin-top: ${({theme}) => theme.screen.rem(1.2)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  blurRadius: 8,
})`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  border-radius: ${({theme}) => theme.screen.rem(0.3)}px;
`;

export const TitleContainerHeader = styled.View`
  width: 90%;
  margin-bottom: ${({theme}) => theme.screen.rem(1)}px;
  margin-top: ${({theme}) => theme.screen.rem(1)}px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: ${({theme}) => theme.screen.rem(1)}px;
  margin-bottom: ${({theme}) => theme.screen.rem(1)}px;
`;

export const Image = styled(FastImage)`
  width: ${({theme}) => theme.screen.rem(19.5)}px;
  height: ${({theme}) => theme.screen.rem(11)}px;
  border-radius: ${({theme}) => theme.screen.rem(1)}px;
`;

export const Icon = styled(Faether)<IconPropsStyle>`
  color: ${({theme, isWhite}) =>
    isWhite ? theme.colors.white : theme.colors.main};
`;

export const HeartIcon = styled(Ionicons)`
  color: ${({theme}) => theme.colors.white};
`;

export const IconMaps = styled(Material)`
  color: ${({theme}) => theme.colors.secondary};
`;

export const ContainerButtonMaps = styled.View`
  width: 45%;
`;
