import {ReactNode} from 'react';

import {Text, FontSizeType} from './NormalText.style';

type TitleProps = {
  children: ReactNode;
  size?: FontSizeType;
  color?: string;
  strong?: boolean;
  center?: boolean;
};

export function NormalText({children, ...rest}: TitleProps) {
  return <Text {...rest}>{children}</Text>;
}
