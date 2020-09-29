import Model, { attr } from "@ember-data/model";

const ADULT_MOVIES = ["Fifty Shades of Grey", "Netflix", "Spartacus"];

export default class MovieModel extends Model {
  @attr("number") popularity;
  @attr("number") vote_count;
  @attr("boolean") video;
  @attr("string") poster_path;
  //@attr("boolean") adult;
  @attr("string") backdrop_path;
  @attr("string") original_language;
  @attr("string") original_title;
  @attr genre_ids;
  @attr("string") title;
  @attr("number") vote_average;
  @attr("string") overview;
  @attr("date") release_date;

  get adult() {
    if (ADULT_MOVIES.includes(this.title)) {
      return true;
    } else {
      return false;
    }
  }
}
