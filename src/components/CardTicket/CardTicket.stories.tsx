import uuid from 'react-native-uuid';

import {TicketTypes} from '@/types/ticket';
import {storiesOf} from '@storybook/react-native';
import {CardTicket} from './CardTicket';

const Card = {
  id: uuid.v4().toString(),
  category: 'Tecnologia',
  date: '15 Out',
  priceUnit: '29,00',
  title: 'Futurecom',
  shortAddress: 'São Paulo Expo, Jabaquara - SP',
  banner:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhzYQUZQeGSCoB-SecEwcX1D-SKWe8-vlo0OoBuiRuNFg&s=10',
};

storiesOf('Component', module).add('CardTicket', () => (
  <CardTicket data={Card as unknown as TicketTypes} />
));
