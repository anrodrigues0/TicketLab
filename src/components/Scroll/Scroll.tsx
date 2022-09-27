import {ReactNode} from 'react';

import {ScrollView} from './Scroll.style';

type ScrollProps = {
  children: ReactNode;
};

export function Scroll({children}: ScrollProps) {
  return <ScrollView>{children}</ScrollView>;
}
