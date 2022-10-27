import {useState} from 'react';
import {ScrollView} from 'react-native';

import {CommonsStrings} from '@/common/strings';

import {Title, NormalText} from '../Texts';
import {TextButton} from '../TextButton';
import {CleanButton} from '../CleanButton';
import {CategoryItemSkeleton} from './CategoryItemSkeleton';

import {MockCategories} from '../../../mock';

import {
  Image,
  ContainerImage,
  ContainerText,
  ContainerTextButton,
  ContainerNameCategory,
} from './CategoryList.style';
import {useEffect} from 'react';

export function CategoryList() {
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoding(true);
    }, 1500);
  });
  return (
    <>
      <ContainerText>
        <Title>{CommonsStrings.home.texts.labelCategoryList}</Title>
      </ContainerText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ContainerImage>
          {MockCategories.map((items, key) => (
            <>
              {loading ? (
                <CleanButton key={key}>
                  <Image source={{uri: items.img}} />
                  <ContainerNameCategory>
                    <NormalText center>{items.name}</NormalText>
                  </ContainerNameCategory>
                </CleanButton>
              ) : (
                <CategoryItemSkeleton key={key} />
              )}
            </>
          ))}
        </ContainerImage>
      </ScrollView>
      <ContainerTextButton>
        <TextButton>{CommonsStrings.home.buttons.seeAllTicket}</TextButton>
      </ContainerTextButton>
    </>
  );
}
