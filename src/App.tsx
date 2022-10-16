import {Routes} from '@routes';
import {Providers} from '@/provider';

import StorybookUI from '../storybook';

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

const LoadStorybook = true;
export default LoadStorybook ? StorybookUI : App;
