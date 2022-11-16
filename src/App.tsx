/* eslint-disable @typescript-eslint/no-unused-vars */
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
export default App;
