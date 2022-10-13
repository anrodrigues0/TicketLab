import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import IconFeather from 'react-native-vector-icons/Feather';

import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {theme} from '@/themes/themes';

import {Button, Ellipse, EllipseText} from './TabButton.styles';

type TabButtonProps = BottomTabBarButtonProps & {
  nameIcon: string;
};

export function TabButton({
  nameIcon,
  onPress,
  accessibilityState,
}: TabButtonProps) {
  const focus = accessibilityState?.selected;
  const radius = useSharedValue(0);
  const translateValue = useSharedValue(0);

  const radiusAnimated = useAnimatedStyle(() => {
    return {
      borderRadius: withSpring(radius.value),
      transform: [{translateY: withSpring(translateValue.value)}],
    };
  });

  useEffect(() => {
    radius.value = 0;
    translateValue.value = 0;
    setTimeout(() => {
      translateValue.value = -20;
      radius.value = 20;
    }, 450);
  }, [focus]);

  return (
    <Button onPress={onPress}>
      {focus ? (
        <Animated.View style={[style.selected, radiusAnimated]}>
          <IconFeather name={nameIcon} size={25} color={theme.colors.white} />
        </Animated.View>
      ) : (
        <>
          {nameIcon !== 'shopping-cart' ? (
            <IconFeather
              name={nameIcon}
              size={25}
              color={theme.colors.gray_110}
            />
          ) : (
            <>
              <Ellipse>
                <EllipseText>00</EllipseText>
              </Ellipse>
              <IconFeather
                name={nameIcon}
                size={25}
                color={theme.colors.gray_110}
              />
            </>
          )}
        </>
      )}
    </Button>
  );
}

const style = StyleSheet.create({
  selected: {
    backgroundColor: theme.colors.main,
    padding: 13,
  },
});
