import {ReactNode} from 'react';

import {theme} from '@/themes/themes';

import {Button} from './CircularButton.style';

type CircularButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  colors?: keyof typeof theme.colors;
};

export function CircularButton({
  children,
  colors,
  onPress,
}: CircularButtonProps) {
  return (
    <Button
      colors={colors || 'white'}
      onPress={onPress}
      style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}>
      {children}
    </Button>
  );
}
