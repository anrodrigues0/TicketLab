import {storiesOf} from '@storybook/react-native';
import {Providers} from '@/provider';
import {Toast} from './Toast';

storiesOf('Component/Toast', module)
  .addDecorator((store) => <Providers>{store()}</Providers>)
  .add('ToastSuccess', () => {
    return (
      <Toast
        notifications={{
          id: '1',
          message: 'Storybook',
          title: 'Storybook',
          type: 'success',
        }}
      />
    );
  })
  .add('ToastWarning', () => {
    return (
      <Toast
        notifications={{
          id: '1',
          message: 'Storybook',
          title: 'Storybook',
          type: 'warning',
        }}
      />
    );
  })
  .add('ToastError', () => {
    return (
      <Toast
        notifications={{
          id: '1',
          message: 'Storybook',
          title: 'Storybook',
          type: 'error',
        }}
      />
    );
  });
