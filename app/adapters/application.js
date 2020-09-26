import JSONAPIAdapter from "@ember-data/adapter/json-api";
import ENV from "movie-doc/config/environment";

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = `${ENV.THEMOVIEDB_BASE_URL}/${ENV.THEMOVIEDB_POPULAR_MOVIE_PATH}`;
  header = {
    Authorization: `Bearer ${ENV.THEMOVIEDB_API_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
  };

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }
}
