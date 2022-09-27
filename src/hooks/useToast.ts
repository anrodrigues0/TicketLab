import {useContext} from 'react';
import {ToastContext} from '@/provider/toast';

export function useToast() {
  const createToast = useContext(ToastContext);
  return createToast;
}
