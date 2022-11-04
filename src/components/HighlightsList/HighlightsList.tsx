import {useState, useEffect} from 'react';
import {Dimensions, ListRenderItem} from 'react-native';

import {useImageUrl} from '@/hooks';
import {CommonsStrings} from '@/common/strings';

import {DotList} from '../DotList';
import {Title} from '../Texts';
import {HighlightItemSkeleton} from './HighlightItemSkeleton';
import {
  Container,
  Image,
  ContainerText,
  ShadowContainer,
} from './HighlightsList.style';

export function HighlightsList() {
  //soon this line will be removed, just a loading demo
  const [loading, setLoading] = useState(false);

  const {highlights} = useImageUrl();
  const keyExtractor = (item: {id: string}) => item?.id;

  const renderItem: ListRenderItem<{id: string; url: string}> = ({item}) => (
    <>
      {loading ? (
        <Container>
          <ShadowContainer>
            <Image source={{uri: item?.url}} resizeMode={'stretch'} />
          </ShadowContainer>
        </Container>
      ) : (
        <HighlightItemSkeleton />
      )}
    </>
  );

  //soon this line will be removed, just a loading demo
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <>
      <ContainerText>
        <Title>{CommonsStrings.components.HighlightsList.title}</Title>
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
