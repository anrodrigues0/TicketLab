import Animated from 'react-native-reanimated';

import styled, {DefaultTheme} from 'styled-components/native';

type ToastType = 'warning' | 'success' | 'error';

type ToastStyleProps = {
  safeMarginTop: number;
};

type ToastColorStyleProps = {
  type: ToastType;
};

type ToastTextStyleProps = {
  strong?: boolean;
  title?: boolean;
  type: ToastType;
};

const ColorsType = (
  type: ToastType,
  theme: DefaultTheme,
  hasBackground: boolean,
) => {
  const colorsTypeBackground = {
    warning: theme.colors.warning_90,
    success: theme.colors.success_90,
    error: theme.colors.error_90,
  };

  const colorsTypeText = {
    warning: theme.colors.warning,
    success: theme.colors.success,
    error: theme.colors.error,
  };

  if (hasBackground) {
    return colorsTypeBackground[type] || theme.colors.warning_90;
  }

  return colorsTypeText[type] || theme.colors.warning_90;
};

export const Container = styled(Animated.View)<ToastStyleProps>`
  width: 100%;
  z-index: 100;
  position: absolute;
  margin-top: ${({safeMarginTop}) => safeMarginTop}px;
  align-items: center;
`;

export const ToastContainer = styled.View<ToastColorStyleProps>`
  border: 1.5px solid ${({theme, type}) => ColorsType(type, theme, false)};
  background-color: ${({theme, type}) => ColorsType(type, theme, true)};
  border-radius: ${({theme}) => theme.screen.rem(0.35)}px;
  width: 95%;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding-left: ${({theme}) => theme.screen.rem(0.8)}px;
  padding-right: ${({theme}) => theme.screen.rem(0.8)}px;
  padding-top: ${({theme}) => theme.screen.rem(0.8)}px;
`;

export const TextContainer = styled.View`
  margin-left: ${({theme}) => theme.screen.rem(0.5)}px;
`;

export const ProgressContainer = styled.View`
  padding-top: ${({theme}) => theme.screen.rem(0.8)}px;
`;

export const Text = styled.Text<ToastTextStyleProps>`
  color: ${({theme, type}) => ColorsType(type, theme, false)};
  font-size: ${({theme, title}) =>
    title ? theme.screen.rem(1) : theme.screen.rem(0.8)}px;
  font-weight: ${({strong}) => (strong ? 600 : 400)};
`;
