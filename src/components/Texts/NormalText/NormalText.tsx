import {ReactNode} from 'react';

import {Text, FontSizeType} from './NormalText.style';

type TitleProps = {
  children: ReactNode;
  size?: FontSizeType;
  color?: string;
  strong?: boolean;
  center?: boolean;
};

export function NormalText({
  children,
  color,
  size,
  strong,
  center,
}: TitleProps) {
  return (
    <Text color={color} size={size} strong={strong} center={center}>
      {children}
    </Text>
  );
}
