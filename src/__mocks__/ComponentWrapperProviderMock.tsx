import {ReactNode} from 'react';

import {render} from '@testing-library/react-native';
import {Providers} from '@/provider';

export function ComponentWrapperProviderMock(children: ReactNode) {
  const component = render(<>{children}</>, {wrapper: Providers});

  return {
    ...component,
    props: component.container.props.children.props.children.props,
  };
}
