import uuid from 'react-native-uuid';
import {storiesOf} from '@storybook/react-native';
import {CardTicketList} from './CardTicketList';
import {TicketTypes} from '@/types/ticket';

const CardTicketMockStorybook = {
  category: 'Storybook',
  data: [
    {
      id: uuid.v4().toString(),
      category: 'Stand Up',
      date: '15 Set',
      priceUnit: '69,00',
      title: 'Stand Up Raiz',
      shortAddress: 'Teatro Satander, Av Paulista - SP',
      banner: 'https://i.ibb.co/cygPXt3/banner-danilo.jpg',
    },
    {
      id: uuid.v4().toString(),
      category: 'Stand Up',
      date: '26 Dez',
      priceUnit: '39,00',
      title: 'Benignismo',
      shortAddress: 'Teatro Ralino Zamboto, Itatibaia - SP',
      banner: 'https://i.ibb.co/3WS36Lp/62dae94e52f51-xs.png',
    },
    {
      id: uuid.v4().toString(),
      category: 'Stand Up',
      date: '11 Out',
      priceUnit: '29,00',
      title: 'COMEDIA NOVA STAND UP COMEDY',
      shortAddress: 'O Boteco do Xexeu, Sao Paulo - SP',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuXiWWRL3fKGOmHkne-ypkkcjVk-nDWB3nH1OVZLPOA&s=10',
    },
    {
      id: uuid.v4().toString(),
      category: 'Stand Up',
      date: '8 Out',
      priceUnit: '59,00',
      title: 'PERUCAS COMEDY',
      shortAddress: 'Hamsa Comedy, Parque Paineiras - SP',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwo-2cI55bLhP0GIqEijne_tAFk1pVgtt4T794Oa8VoLxFpzhGreB7zdw1KqOV&s',
    },
    {
      id: uuid.v4().toString(),
      category: 'Stand Up',
      date: '15 Set',
      priceUnit: '69,00',
      title: 'Stand Up Raiz',
      shortAddress: 'Teatro Satander, Av Paulista - SP',
      banner: 'https://i.ibb.co/cygPXt3/banner-danilo.jpg',
    },
    {
      id: uuid.v4().toString(),
      category: 'Stand Up',
      date: '26 Dez',
      priceUnit: '39,00',
      title: 'Benignismo',
      shortAddress: 'Teatro Ralino Zamboto, Itatibaia - SP',
      banner: 'https://i.ibb.co/3WS36Lp/62dae94e52f51-xs.png',
    },
    {
      id: uuid.v4().toString(),
      category: 'Stand Up',
      date: '11 Out',
      priceUnit: '29,00',
      title: 'COMEDIA NOVA STAND UP COMEDY',
      shortAddress: 'O Boteco do Xexeu, Sao Paulo - SP',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuXiWWRL3fKGOmHkne-ypkkcjVk-nDWB3nH1OVZLPOA&s=10',
    },
    {
      id: uuid.v4().toString(),
      category: 'Stand Up',
      date: '8 Out',
      priceUnit: '59,00',
      title: 'PERUCAS COMEDY',
      shortAddress: 'Hamsa Comedy, Parque Paineiras - SP',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwo-2cI55bLhP0GIqEijne_tAFk1pVgtt4T794Oa8VoLxFpzhGreB7zdw1KqOV&s',
    },
  ],
};

storiesOf('List', module).add('CardTicketList', () => (
  <CardTicketList
    data={CardTicketMockStorybook.data as unknown as TicketTypes[]}
    category={CardTicketMockStorybook.category}
  />
));
