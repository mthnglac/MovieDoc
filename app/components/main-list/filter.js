import Component from '@glimmer/component';

export default class MainListFilterComponent extends Component {
  get results() {
    let { list, query  } = this.args;

    if (query) {
      list = list.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    }

    return list;
  }
}
