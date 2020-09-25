import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MainListComponent extends Component {
  @tracked query = '';
}
