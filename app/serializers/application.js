import JSONSerializer from "@ember-data/serializer/json";

export default class ApplicationSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { movies: payload.results };
    return super.normalizeResponse(...arguments);
  }
}
