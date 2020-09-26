import Model, {attr} from '@ember-data/model';

export default class MoviesModel extends Model {
  @attr popularity;
  @attr vote_count;
  @attr video;
  @attr poster_path;
  @attr id;
  @attr adult;
  @attr backdrop_path;
  @attr original_language;
  @attr original_title;
  @attr genre_ids;
  @attr title;
  @attr vote_average;
  @attr overview;
  @attr release_date;
}
