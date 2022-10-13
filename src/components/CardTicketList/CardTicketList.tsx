import {ListRenderItem} from 'react-native';

import {TicketTypes} from '@/types/ticket';

import {Title} from '../Texts';
import {CardTicket} from '../CardTicket';

import {
  TextContainer,
  ListContainer,
  ListCardTicket,
} from './CardTicketList.style';

type CardTicketListProps = {
  category: string;
  data: TicketTypes[];
};

export function CardTicketList({category, data}: CardTicketListProps) {
  const renderItem: ListRenderItem<TicketTypes> = ({item}) => {
    return <CardTicket data={item} />;
  };

  return (
    <>
      <TextContainer>
        <Title>{category}</Title>
      </TextContainer>
      <ListContainer>
        <ListCardTicket
          horizontal
          data={data}
          keyExtractor={({id}: {id: string}) => id}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </ListContainer>
    </>
  );
}
