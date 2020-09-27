import Route from "@ember/routing/route";
import { inject } from "@ember/service";

export default class MovieRoute extends Route {
  @inject store;

  async model() {
    return this.store.findAll('movie');
  }
}
