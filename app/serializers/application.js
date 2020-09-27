//import JSONAPISerializer from "@ember-data/serializer/json-api";
//import JSONSerializer from "@ember-data/serializer/json";
import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = payload.results;
    return super.normalizeResponse(...arguments);
  }
}
