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

const STORYBOOK_LOAD = false;
export default STORYBOOK_LOAD ? StorybookUI : App;
