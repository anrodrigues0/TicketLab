import {useRem} from 'responsive-native';

import {Title, CircularButton, Logo, Information, Button} from '@/components';
import {CommonsStrings} from '@/common/strings';
import {useNavigation} from '@/hooks';

import {MockTickets} from '../../../mock';
import {
  Container,
  HeaderContainer,
  ContentContainer,
  ImageBackground,
  Image,
  HeaderContentContainer,
  TitleContainerHeader,
  LogoContainer,
  Icon,
  PriceContainer,
  InformationContainer,
  IconMaps,
  ContainerButtonMaps,
  FavoriteContainer,
  HeartIcon,
} from './DetailTicket.style';

export function DetailTicket() {
  const rem = useRem();
  const {goBack} = useNavigation();

  return (
    <Container>
      <HeaderContainer>
        <ImageBackground source={{uri: MockTickets[0].data[0].banner}} />
        <HeaderContentContainer>
          <LogoContainer>
            <Button size="xSmall" colors="gray" onPress={goBack}>
              <Icon name="x" size={rem(1.3, true)} />
            </Button>
            <Logo />
          </LogoContainer>
          <Image
            source={{uri: MockTickets[0].data[0].banner}}
            resizeMode={'stretch'}
          />
          <TitleContainerHeader>
            <Title color="white" size="large">
              {MockTickets[0].data[0].title}
            </Title>
          </TitleContainerHeader>
        </HeaderContentContainer>
      </HeaderContainer>
      <ContentContainer>
        <InformationContainer>
          <FavoriteContainer>
            <Information
              label={CommonsStrings.screens.DetailTicket.labels.gender}
              content="Stand Up"
            />
            <CircularButton colors="main">
              <HeartIcon name="heart-outline" size={rem(1.4, true)} />
            </CircularButton>
          </FavoriteContainer>
        </InformationContainer>
        <InformationContainer>
          <Information
            label={CommonsStrings.screens.DetailTicket.labels.dateHour}
            content="15 Set 2022 as 19h"
          />
        </InformationContainer>
        <InformationContainer>
          <Information
            label={CommonsStrings.screens.DetailTicket.labels.place}
            content="Teatro Santander"
          />
        </InformationContainer>
        <InformationContainer>
          <Information
            label={CommonsStrings.screens.DetailTicket.labels.address}
            content="Av. Pres. Juscelino Kubitschek, 2041 - Itaim Bibi, S??o Paulo - SP, 04543-011"
          />
          <ContainerButtonMaps>
            <Button
              colors="gray"
              textColor="gray_120"
              size="small"
              disabledBoldText
              iconRight={<IconMaps name="google-maps" size={rem(1.2, true)} />}>
              {CommonsStrings.screens.DetailTicket.seeMaps}
            </Button>
          </ContainerButtonMaps>
        </InformationContainer>
        <PriceContainer>
          <Information label="Pre??o unitario" content="R$ 69,00" large />
          <Button
            iconRight={
              <Icon name="shopping-cart" size={rem(1.2, true)} isWhite />
            }
            colors="secondary">
            {CommonsStrings.screens.DetailTicket.addCart}
          </Button>
        </PriceContainer>
      </ContentContainer>
    </Container>
  );
}
