import {Header, Scroll, HighlightsList, CategoryList} from '@/components';

import {HighlightsListContainer, CategoryListContainer} from './Home.style';

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
    </Scroll>
  );
}
