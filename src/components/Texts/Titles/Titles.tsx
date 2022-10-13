import {ReactNode} from 'react';

import {TextButton} from '../../TextButton';
import {Text, Container} from './Titles.style';

type TitleProps = {
  children: ReactNode;
  color?: string;
  seeAllButton?: boolean;
  onPress?: () => void;
};

export function Title({children, color, seeAllButton, onPress}: TitleProps) {
  return (
    <Container>
      <Text color={color}>{children}</Text>
      {seeAllButton && <TextButton onPress={onPress}>Ver tudo</TextButton>}
    </Container>
  );
}
