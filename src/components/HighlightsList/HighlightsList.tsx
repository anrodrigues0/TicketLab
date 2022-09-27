import {Dimensions, ListRenderItem} from 'react-native';

import {useImageUrl} from '@/hooks';
import {CommonsStrings} from '@/common/strings';

import {DotList} from '../DotList';
import {Title} from '../Texts';
import {
  Container,
  Image,
  ContainerText,
  ShadowContainer,
} from './HighlightsList.style';

export function HighlightsList() {
  const {highlights} = useImageUrl();
  const keyExtractor = (item: {id: string}) => String(item?.id);

  const renderItem: ListRenderItem<{id: string; url: string}> = ({item}) => (
    <Container>
      <ShadowContainer>
        <Image source={{uri: item?.url}} />
      </ShadowContainer>
    </Container>
  );

  return (
    <>
      <ContainerText>
        <Title>{CommonsStrings.home.texts.highlightsList}</Title>
      </ContainerText>
      <DotList
        data={Object(highlights)}
        pagingEnabled
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        sizeItem={Dimensions.get('window').width}
      />
    </>
  );
}
