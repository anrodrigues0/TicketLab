import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ToastProvider} from './toast';
import {theme} from '@/themes/themes';

import {ThemeProvider} from './themes';

type ProvidersProps = {
  children?: React.ReactNode;
};

export function Providers({children}: ProvidersProps) {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <SafeAreaView style={style.safe} edges={['right', 'top', 'left']}>
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={theme.colors.main}
            />
            <ToastProvider>{children}</ToastProvider>
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.main,
  },
});
