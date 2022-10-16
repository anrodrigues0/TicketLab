import {useLayoutEffect} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Container, Progress} from './ProgressBar.style';

type ProgressBarProps = {
  totalSteps: number;
  steps: number;
  color?: string;
};

export function ProgressBar({totalSteps, steps, color}: ProgressBarProps) {
  const progress = useSharedValue(0);
  const progressAnimated = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  useLayoutEffect(() => {
    const multiplier = 100 / totalSteps;
    progress.value = withSpring(multiplier * steps);
  }, [totalSteps, progress, steps]);

  return (
    <Container>
      <Progress style={progressAnimated} color={color} />
    </Container>
  );
}
