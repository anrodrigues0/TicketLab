import {ScrollView} from 'react-native';

import {CommonsStrings} from '@/common/strings';

import {Title, NormalText} from '../Texts';
import {TextButton} from '../TextButton';
import {CleanButton} from '../CleanButton';

import {MockCategories} from '../../../mock';

import {
  Image,
  ContainerImage,
  ContainerText,
  ContainerTextButton,
  ContainerNameCategory,
} from './CategoryList.style';

export function CategoryList() {
  return (
    <>
      <ContainerText>
        <Title>{CommonsStrings.home.texts.labelCategoryList}</Title>
      </ContainerText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ContainerImage>
          {MockCategories.map((items, key) => (
            <CleanButton key={key}>
              <Image source={{uri: items.img}} />
              <ContainerNameCategory>
                <NormalText center>{items.name}</NormalText>
              </ContainerNameCategory>
            </CleanButton>
          ))}
        </ContainerImage>
      </ScrollView>
      <ContainerTextButton>
        <TextButton>Veja todos os ingressos</TextButton>
      </ContainerTextButton>
    </>
  );
}
