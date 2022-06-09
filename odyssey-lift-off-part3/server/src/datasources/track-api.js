const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(id) {
    return this.get(`author/${id}`);
  }

  getTrack(id) {
    return this.get(`track/${id}`);
  }

  getTrackModules(id) {
    return this.get(`track/${id}/modules`);
  }
}

module.exports = TrackAPI;
