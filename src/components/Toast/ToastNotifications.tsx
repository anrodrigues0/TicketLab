import {Toast} from './Toast';
import {ToastNotificationsTypes} from '@/types/notifications';

type ToastNotificationsProps = {
  notifications: ToastNotificationsTypes[];
};

export function ToastNotifications({notifications}: ToastNotificationsProps) {
  return (
    <>
      {notifications.map((value, index) => {
        return <Toast notifications={value} key={index} />;
      })}
    </>
  );
}
