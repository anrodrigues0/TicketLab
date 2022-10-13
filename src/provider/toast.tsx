import {createContext, ReactNode, useCallback, useState} from 'react';
import uuid from 'react-native-uuid';

import {ToastNotificationsTypes} from '@/types/notifications';

import {ToastNotifications} from '../components/Toast/ToastNotifications';

type ToastProviderProps = {
  children: ReactNode;
};

type ToastContextValues = {
  createToast: (payload: Omit<ToastNotificationsTypes, 'id'>) => void;
  onDissmisToast: (id: string) => void;
};

export const ToastContext = createContext({} as ToastContextValues);
export function ToastProvider({children}: ToastProviderProps) {
  const [toastList, setToastList] = useState<ToastNotificationsTypes[]>([]);

  const createToast = useCallback(
    (payload: Omit<ToastNotificationsTypes, 'id'>) => {
      setToastList([...toastList, {id: String(uuid.v4()), ...payload}]);
    },
    [toastList],
  );

  const onDissmisToast = useCallback(
    (id: string) => {
      const dissmisToast = toastList.filter((value) => value.id !== id);
      setToastList(dissmisToast);
    },
    [toastList],
  );

  return (
    <ToastContext.Provider value={{createToast, onDissmisToast}}>
      {children}
      <ToastNotifications notifications={toastList} />
    </ToastContext.Provider>
  );
}
