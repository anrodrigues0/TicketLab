import {ReactNode} from 'react';

import {CleanButton} from '../CleanButton';
import {Text} from './TextButton.style';

type TextButtonProps = {
  children: ReactNode;
  onPress?: () => void;
};

export function TextButton({children, onPress}: TextButtonProps) {
  return (
    <CleanButton onPress={onPress}>
      <Text>{children}</Text>
    </CleanButton>
  );
}
