import {ReactNode} from 'react';

import {Text} from './Titles.style';

type TitleProps = {
  children: ReactNode;
};

export function Title({children}: TitleProps) {
  return <Text>{children}</Text>;
}
