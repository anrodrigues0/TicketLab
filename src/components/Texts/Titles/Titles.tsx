import {ReactNode} from 'react';

import {TextButton} from '../../TextButton';
import {Text, Container} from './Titles.style';
import {SizesTitleType} from '@/utils/selectSizeTexts';

type TitleProps = {
  children: ReactNode;
  color?: string;
  size?: SizesTitleType;
  seeAllButton?: boolean;
  onPress?: () => void;
};

export function Title({
  children,
  color,
  seeAllButton,
  onPress,
  size,
}: TitleProps) {
  return (
    <Container>
      <Text size={size} color={color}>
        {children}
      </Text>
      {seeAllButton && <TextButton onPress={onPress}>Ver tudo</TextButton>}
    </Container>
  );
}
