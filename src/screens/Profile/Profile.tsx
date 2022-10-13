import {useToast} from '@/hooks';
import {Button} from 'react-native';

export function Profile() {
  const {createToast} = useToast();
  return (
    <Button
      title="show toast"
      onPress={() =>
        createToast({
          title: 'Profile',
          message: 'testando',
          type: 'success',
        })
      }
    />
  );
}
