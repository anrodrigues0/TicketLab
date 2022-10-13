import {useState} from 'react';
import {useRem} from 'responsive-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {TicketTypes} from '@/types/ticket';
import {limitText} from '@/utils';

import {NormalText} from '../Texts';
import {CleanButton} from '../CleanButton';
import {
  Container,
  ImageBackground,
  ContainerContent,
  ContainerCategory,
  ContainerImage,
  InformationContainer,
  Image,
  PriceContainer,
  Button,
} from './CardTicket.style';

type CardTicketProps = {
  data: TicketTypes;
};

export function CardTicket({data}: CardTicketProps) {
  const rem = useRem();
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteCart = () => setFavorite(!favorite);

  return (
    <Container>
      <ImageBackground source={{uri: data.banner}} resizeMode={'cover'} />
      <ContainerContent>
        <ContainerCategory>
          <NormalText strong color="white">
            {data.category}
          </NormalText>
          <CleanButton onPress={handleFavoriteCart}>
            <Icon
              name={favorite ? 'heart' : 'heart-outline'}
              size={rem(1.2)}
              color="white"
            />
          </CleanButton>
        </ContainerCategory>
        <ContainerImage>
          <Image source={{uri: data.banner}} />
        </ContainerImage>
        <InformationContainer>
          <NormalText color="white" size="small">
            {data.date}
          </NormalText>
          <NormalText strong color="white">
            {limitText(data.title)}
          </NormalText>
          <NormalText color="white" size="small">
            {data.shortAddress}
          </NormalText>
          <PriceContainer>
            <NormalText color="white" strong>
              R$ {data.priceUnit}/un
            </NormalText>
          </PriceContainer>
          <Button style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}>
            <NormalText color="white" strong>
              Ver ingresso
            </NormalText>
          </Button>
        </InformationContainer>
      </ContainerContent>
    </Container>
  );
}
