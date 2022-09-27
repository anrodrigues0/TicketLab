import 'styled-components';
import type {ResponsiveTheme} from '.././provider/themes';

import {theme} from './themes';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ResponsiveTheme, ThemeType {}
}
