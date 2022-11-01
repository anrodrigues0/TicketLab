import {RootNavigationWithNavigationRNProps} from '@/routes/types';
import {useNavigation as navigation} from '@react-navigation/native';

export function useNavigation() {
  return navigation<RootNavigationWithNavigationRNProps>();
}
