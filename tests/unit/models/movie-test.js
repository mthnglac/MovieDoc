import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Model | movie", function (hooks) {
  setupTest(hooks);

  test("it has the right adult spec", function (assert) {
    let store = this.owner.lookup("service:store");
    let movie = store.createRecord("movie", {
      id: 10000,
      popularity: 2521.31,
      vote_count: 30,
      video: false,
      poster_path: "/blabalba/balalbab.jpg",
      backdrop_path: "/2d4asdfsdfsdfssdfdfdfadawd.jpg",
      original_language: "en",
      original_title: "Fifty Shades of Grey",
      genre_ids: [11],
      title: "Fifty Shades of Grey",
      vote_average: 9.9,
      overview: "You must read the Silmarillion before!!!",
      release_date: "2021-01-01",
    });

    assert.equal(movie.adult, true);

    movie.title = "The Lord of the rings";
    assert.equal(movie.adult, false);

    movie.title = "Netflix";
    assert.equal(movie.adult, true);

    movie.title = "Spartacus";
    assert.equal(movie.adult, true);

    movie.title = "Alyazmalim";
    assert.equal(movie.adult, false);
  });
});
