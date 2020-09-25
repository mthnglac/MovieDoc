import Route from "@ember/routing/route";
import ENV from "movie-doc/config/environment";

export default class MoviesRoute extends Route {
  async model() {
    let response = await fetch(
      `${ENV.THEMOVIEDB_BASE_URL}/movie/popular?api_key=${ENV.THEMOVIEDB_API_KEY}`
    );
    let { results } = await response.json();

    return results.map((model) => {
      let { id, title, popularity, vote_average, overview } = model;
      return { id, title, popularity, vote_average, overview };
    });
  }
}
