import {useEffect, useState} from 'react';
import {ListRenderItem} from 'react-native';

import {TicketTypes} from '@/types/ticket';

import {Title} from '../Texts';
import {CardTicket, CardTicketSkeleton} from '../CardTicket';

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
  //soon this line will be removed, just a loading demo
  const [loading, setLoading] = useState(false);

  const renderItem: ListRenderItem<TicketTypes> = ({item}) => {
    return <>{loading ? <CardTicket data={item} /> : <CardTicketSkeleton />}</>;
  };

  //soon this line will be removed, just a loading demo
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

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
