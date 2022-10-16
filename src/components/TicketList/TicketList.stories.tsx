import {storiesOf} from '@storybook/react-native';
import {Scroll} from '../Scroll';
import {PureTicketList} from './TicketList';

storiesOf('List', module).add('TicketList', () => (
  <Scroll>
    <PureTicketList />
  </Scroll>
));
