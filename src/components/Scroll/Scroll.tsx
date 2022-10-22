import {ReactNode} from 'react';
import {useWindowDimensions} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  withTiming,
} from 'react-native-reanimated';

import {ScrollView, AnimatedHeaderContainer} from './Scroll.style';

type ScrollProps = {
  children: ReactNode;
  hasFixedTopBar?: boolean;
};

const MULTIPLIER_SCALE = 30;
const DIVIDER_HEIGHT_SCREEN = 2;

export function Scroll({children, hasFixedTopBar}: ScrollProps) {
  const {scale, height} = useWindowDimensions();
  const heightAnimatedBarStyle = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const positionY = Math.round(event.contentOffset.y);
    if (positionY > height / DIVIDER_HEIGHT_SCREEN) {
      heightAnimatedBarStyle.value = scale * MULTIPLIER_SCALE;
    } else {
      heightAnimatedBarStyle.value = 0;
    }
  });

  const animatedBarStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(heightAnimatedBarStyle.value, {duration: 1000}),
    };
  });

  return (
    <>
      {hasFixedTopBar && <AnimatedHeaderContainer style={animatedBarStyle} />}
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}>
        {children}
      </ScrollView>
    </>
  );
}
