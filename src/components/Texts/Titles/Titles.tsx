import {ReactNode} from 'react';

import {Text} from './Titles.style';

type TitleProps = {
  children: ReactNode;
  color?: string;
};

export function Title({children, color}: TitleProps) {
  return <Text color={color}>{children}</Text>;
}
