import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
import {useRem} from 'responsive-native';

import {NormalText} from '../Texts';
import {Container, IconContainer} from './InputSearch.style';

export function InputSearch() {
  const {colors} = useTheme();
  const rem = useRem();
  return (
    <Container>
      <NormalText color={colors.gray_110}>Buscar Ingressos</NormalText>
      <IconContainer>
        <Icon
          name="search-circle"
          size={rem(2, true)}
          color={colors.secondary}
        />
      </IconContainer>
    </Container>
  );
}
