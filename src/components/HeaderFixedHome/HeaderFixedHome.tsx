import Icon from 'react-native-vector-icons/AntDesign';
import {useRem} from 'responsive-native';
import {useTheme} from 'styled-components';

import {Logo} from '../Logo';
import {NormalText} from '../Texts';
import {InputSearch} from '../InputSearch';
import {CleanButton} from '../CleanButton';
import {
  Container,
  HigherContainer,
  UserContainer,
  UserContainerInformation,
} from './HeaderFixedHome.style';

export function HeaderFixedHome() {
  const rem = useRem();
  const {colors} = useTheme();

  return (
    <Container>
      <HigherContainer>
        <UserContainer>
          <Icon name="login" size={rem(1.5, true)} color={colors.white} />
          <CleanButton>
            <UserContainerInformation>
              <NormalText color="white">Ola,</NormalText>
              <NormalText color="white" strong>
                Faça Login
              </NormalText>
            </UserContainerInformation>
          </CleanButton>
        </UserContainer>
        <Logo />
      </HigherContainer>
      <InputSearch />
    </Container>
  );
}
