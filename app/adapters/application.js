import JSONAPIAdapter from "@ember-data/adapter/json-api";
import ENV from "movie-doc/config/environment";

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = `${ENV.TMDB.BASE_URL}`;
  get headers() {
    return {
      Authorization: `Bearer ${ENV.TMDB.API_KEY}`,
      "Content-Type": "application/json;charset=utf-8",
    };
  }

  pathForType() {
    return "movie/popular";
  }
}
