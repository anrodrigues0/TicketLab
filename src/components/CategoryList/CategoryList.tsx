import {ScrollView} from 'react-native';

import {useImageUrl} from '@/hooks';
import {CommonsStrings} from '@/common/strings';

import {Title} from '../Texts';
import {CleanButton} from '../CleanButton';

import {Image, ContainerImage, ContainerText} from './CategoryList.style';

export function CategoryList() {
  const {categories} = useImageUrl();
  return (
    <>
      <ContainerText>
        <Title>{CommonsStrings.home.texts.labelCategoryList}</Title>
      </ContainerText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ContainerImage>
          {categories.map(items => (
            <CleanButton key={items.id}>
              <Image source={{uri: items.url}} />
            </CleanButton>
          ))}
        </ContainerImage>
      </ScrollView>
    </>
  );
}
