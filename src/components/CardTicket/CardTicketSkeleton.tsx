import Skeleton from 'react-native-skeleton-placeholder';
import {useRem} from 'responsive-native';

export function CardTicketSkeleton() {
  const rem = useRem();
  return (
    <Skeleton>
      <Skeleton.Item
        width={rem(8.1)}
        height={rem(16.2)}
        marginLeft={rem(0.8)}
        borderRadius={rem(0.55)}
      />
    </Skeleton>
  );
}
