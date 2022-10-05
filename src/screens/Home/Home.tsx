import {
  Header,
  Scroll,
  HighlightsList,
  CategoryList,
  CardTicket,
} from '@/components';
import {View} from 'react-native';
import {TicketTypes} from '@/types/ticket';

import {HighlightsListContainer, CategoryListContainer} from './Home.style';

const mock: TicketTypes = [
  {
    category: 'Stand Up',
    date: '15 Set',
    priceUnit: '69,00',
    title: 'Stand Up Raiz',
    shortAddress: 'Teatro Satander, Av Paulista - SP',
    banner: 'https://i.ibb.co/cygPXt3/banner-danilo.jpg',
  },
  {
    category: 'Stand Up',
    date: '15 Set',
    priceUnit: '69,00',
    title: 'Stand Up Raiz',
    shortAddress: 'Teatro Satander, Av Paulista - SP',
    banner: 'https://i.ibb.co/3WS36Lp/62dae94e52f51-xs.png',
  },
  ,
];

export function Home() {
  return (
    <Scroll>
      <Header />
      <HighlightsListContainer>
        <HighlightsList />
      </HighlightsListContainer>
      <CategoryListContainer>
        <CategoryList />
      </CategoryListContainer>
      <View style={{marginLeft: 30, marginTop: 20, flexDirection: 'row'}}>
        <CardTicket data={mock[0]} />
        <CardTicket data={mock[1]} />
      </View>
    </Scroll>
  );
}
