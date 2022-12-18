import {
  Header,
  Scroll,
  HighlightsList,
  CategoryList,
  PureTicketList,
} from '@/components';

import {
  HighlightsListContainer,
  CategoryListContainer,
  CardTicketListContainer,
} from './Home.style';

export function Home() {
  return (
    <Scroll hasFixedTopBar>
      <Header />
      <HighlightsListContainer>
        <HighlightsList />
      </HighlightsListContainer>

      <CategoryListContainer>
        <CategoryList />
      </CategoryListContainer>

      <CardTicketListContainer>
        <PureTicketList />
      </CardTicketListContainer>
    </Scroll>
  );
}
