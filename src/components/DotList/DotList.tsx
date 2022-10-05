import {useCallback, useMemo, useState, useLayoutEffect} from 'react';
import {
  FlatList,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatListProps,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import {DotContainer, Dot, LimitDots} from './DotList.style';

type DotListProps<T> = FlatListProps<T> & {
  sizeItem: number;
};

export function DotList<T>({data, sizeItem, ...rest}: DotListProps<T>) {
  const [positionDot, setPositionDot] = useState(0);
  const positionX = useSharedValue(0);

  const dataSize = useMemo(() => {
    return data!?.length > 6 ? data!?.slice(0, 7) : data;
  }, [data]);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentPosition = Math.round(
        Math.floor(event.nativeEvent.contentOffset.x) / Math.round(sizeItem),
      );
      if (currentPosition >= 0) {
        setPositionDot(currentPosition);
      }
    },
    [sizeItem],
  );

  const animatedDot = useAnimatedStyle(() => {
    return {
      transform: [{translateX: positionX.value}],
    };
  });

  const handleScrollAnimation = () => {
    if (positionDot >= dataSize!.length) {
      positionX.value = withSpring(
        Math.floor(-Math.abs(15 * (positionDot - (dataSize!.length - 1)))),
      );
    }

    if (positionDot < dataSize!.length) {
      positionX.value = withSpring(Math.floor(-Math.abs(0)));
    }
  };

  useLayoutEffect(handleScrollAnimation, [dataSize, positionDot, positionX]);

  return (
    <View>
      <FlatList
        data={data ?? []}
        horizontal={true}
        scrollEventThrottle={20}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        {...rest}
      />
      <DotContainer>
        <LimitDots size={dataSize!.length}>
          {data!.map((_, index) => {
            return (
              <Animated.View style={animatedDot} key={index}>
                <Dot active={positionDot === index} />
              </Animated.View>
            );
          })}
        </LimitDots>
      </DotContainer>
    </View>
  );
}
