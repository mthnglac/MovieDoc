import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, fillIn } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | list", function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.setProperties({
      movies: [
        {
          id: 16000,
          popularity: 2221.31,
          vote_count: 33,
          video: false,
          poster_path: "/elasalqa/qqqqqqqq.jpg",
          backdrop_path: "/2d4asdfqqqqqqqqdfdfdfadawd.jpg",
          original_language: "tr",
          original_title: "Battalgazi",
          genre_ids: [11],
          title: "Battalgazi",
          vote_average: 10,
          overview: "Savulun!",
          release_date: "1998-01-01",
        },
        {
          id: 10030,
          popularity: 1521.31,
          vote_count: 50,
          video: false,
          poster_path: "/ffffffff/balalbab.jpg",
          backdrop_path: "/2d4asdffflsdfssdfdfdfadawd.jpg",
          original_language: "en",
          original_title: "The Witcher",
          genre_ids: [11],
          title: "The Witcher",
          vote_average: 9.9,
          overview: "You must read the Silmarillion before!!!",
          release_date: "2021-01-01",
        },
      ],
    });
  });

  test("it renders all given movie properties", async function (assert) {
    await render(hbs`<List @list={{this.movies}}/>`);

    assert.dom("label").exists();
    assert.dom("label span").exists();
    assert.dom("label span").hasText("What movie would you like to search ?");
    assert.dom('label input').exists();
    assert.dom("label p").exists();

    assert.dom("#movies").exists();
    assert.dom('#movies tr').exists({ count: 4 })
    assert.dom('#movies tr:nth-of-type(2) td:nth-of-type(2)').containsText('Battalgazi');
    assert.dom('#movies tr:nth-of-type(4) td:nth-of-type(2)').containsText('The Witcher');
  });

  test("it updates the movies according to the search query", async function (assert) {
    await render(hbs`<List @list={{this.movies}}/>`);

    assert.dom("label").exists();
    assert.dom("label span").exists();
    assert.dom("label span").hasText("What movie would you like to search ?");
    assert.dom('label input').exists();
    assert.dom("label p").exists();

    await fillIn('label input', 'Battalgazi');

    assert.dom("#movies").exists();
    assert.dom('table').exists();
    assert.dom('table').exists({ count: 1 });
    assert.dom('table').containsText('Battalgazi')

    await fillIn('label input', 'The Witcher');

    assert.dom("#movies").exists();
    assert.dom('table').exists();
    assert.dom('table').exists({ count: 1 });
    assert.dom('table').containsText('The Witcher')
  });
});
