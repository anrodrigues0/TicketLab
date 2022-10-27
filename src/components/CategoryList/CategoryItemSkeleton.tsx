import Skeleton from 'react-native-skeleton-placeholder';
import {useRem} from 'responsive-native';

export function CategoryItemSkeleton() {
  const rem = useRem();
  return (
    <Skeleton>
      <>
        <Skeleton.Item
          width={rem(5.1)}
          height={rem(5.1)}
          borderRadius={rem(5.1)}
          marginLeft={rem(1)}
        />
        <Skeleton.Item
          width={rem(3)}
          height={8}
          marginLeft={rem(2.1)}
          marginTop={rem(0.5)}
        />
      </>
    </Skeleton>
  );
}
