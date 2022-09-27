import {useLayoutEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import {ToastNotificationsTypes} from '@/types/notifications';
import {useToast} from '@/hooks';

import {
  Container,
  ToastContainer,
  Text,
  ProgressContainer,
  ContentContainer,
  TextContainer,
} from './Toast.style';
import {LayoutChangeEvent} from 'react-native';

type ToastProps = {
  notifications: ToastNotificationsTypes;
};

const typeSelectIcon = {
  warning: 'warning',
  error: 'close-circle',
  success: 'checkmark-circle',
};

const TOTAL_STEPS_PROGRESS = 4 * 1000;
export function Toast({notifications}: ToastProps) {
  const {top} = useSafeAreaInsets();
  const {colors} = useTheme();
  const {onDissmisToast} = useToast();
  const translateX = useSharedValue(-1000);
  const progressValue = useSharedValue(100);
  const handleTypeToast = notifications.type || 'warning';

  const typeSelectColor = {
    warning: colors.warning,
    error: colors.error,
    success: colors.success,
  };

  const Translate = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const Progress = useAnimatedStyle(() => {
    return {
      width: `${progressValue.value}%`,
      backgroundColor: typeSelectColor[notifications.type],
      height: 5,
    };
  });

  useLayoutEffect(() => {
    translateX.value = withSequence(
      withSpring(0),
      withDelay(TOTAL_STEPS_PROGRESS, withSpring(-1000)),
    );
  }, [translateX]);

  useLayoutEffect(() => {
    progressValue.value = withTiming(0, {
      duration: TOTAL_STEPS_PROGRESS + 2000,
    });
  }, [progressValue]);

  const handleDissmisToast = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    if (width <= 0) {
      onDissmisToast(notifications.id);
    }
  };

  return (
    <Container safeMarginTop={top} style={Translate}>
      <ToastContainer type={handleTypeToast}>
        <ContentContainer>
          <Icon
            name={typeSelectIcon[notifications.type]}
            size={25}
            color={typeSelectColor[notifications.type]}
          />
          <TextContainer>
            <Text title strong type={handleTypeToast}>
              {notifications.title}
            </Text>
            <Text type={handleTypeToast}>{notifications.message}</Text>
          </TextContainer>
        </ContentContainer>
        <ProgressContainer>
          <Animated.View onLayout={handleDissmisToast} style={Progress} />
        </ProgressContainer>
      </ToastContainer>
    </Container>
  );
}
