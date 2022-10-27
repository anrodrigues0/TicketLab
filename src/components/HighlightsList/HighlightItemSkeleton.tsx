import {Dimensions} from 'react-native';
import Skeleton from 'react-native-skeleton-placeholder';
import {useRem} from 'responsive-native';

export function HighlightItemSkeleton() {
  const rem = useRem();
  return (
    <Skeleton>
      <Skeleton.Item alignItems="center" width={Dimensions.get('window').width}>
        <Skeleton.Item
          width={Dimensions.get('window').width / 1.07}
          height={rem(10, true)}
          marginBottom={rem(0.5)}
          borderRadius={rem(0.7, true)}
          marginLeft={10}
        />
      </Skeleton.Item>
    </Skeleton>
  );
}
