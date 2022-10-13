import {memo} from 'react';
import {TicketTypes} from '@/types/ticket';

import {CardTicketList} from '../CardTicketList';
import {MockTickets} from '../../../mock';

import {ContainerList} from './TicketList.style';

function TicketList() {
  return (
    <>
      {MockTickets.map(({category, data}, key) => {
        return (
          <ContainerList key={key}>
            <CardTicketList
              key={key}
              category={category}
              data={data as unknown as TicketTypes[]}
            />
          </ContainerList>
        );
      })}
    </>
  );
}

export const PureTicketList = memo(TicketList);
