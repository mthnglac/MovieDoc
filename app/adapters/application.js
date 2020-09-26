import JSONAPIAdapter from "@ember-data/adapter/json-api";
import ENV from "movie-doc/config/environment";
import { inject } from "@ember/service";

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = `${ENV.TMDB.BASE_URL}`;
  get headers() {
    return {
      Authorization: `Bearer ${ENV.TMDB.API_KEY}`,
    };
  }

  pathForType() {
    return "movie/popular";
  }
}
