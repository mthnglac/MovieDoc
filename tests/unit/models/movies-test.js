import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Model | movies", function (hooks) {
  setupTest(hooks);

  test("it it has the right type", function (assert) {
    let store = this.owner.lookup("service:store");
    let movie = store.createRecord("movies", {
      popularity: 2151.476,
      vote_count: 22,
      video: false,
      poster_path: "/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      id: 694919,
      adult: false,
      backdrop_path: "/pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      original_title: "Money Plane",
      genre_ids: [28],
      title: "Money Plane",
      vote_average: 5.5,
      overview: "blablablablabalbalbalabllbla",
      release_date: "2020-09-29",
    });

    assert.equal(movie.original_language, "en");

    movie.original_language = "tr";
    assert.equal(movie.original_language, "Turkish");

    movie.original_language = "en";
    assert.equal(movie.original_language, "English");
  });
});
