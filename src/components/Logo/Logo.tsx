import {Container, Text} from './Logo.style';
import {CommonsStrings} from '../../common/strings';

export function Logo() {
  return (
    <Container>
      <Text>{CommonsStrings.components.Logo.ticket}</Text>
      <Text yellow>{CommonsStrings.components.Logo.lab}</Text>
    </Container>
  );
}
