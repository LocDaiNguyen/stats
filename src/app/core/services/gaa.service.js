class GaaService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.gaaUrl = '/api/gaas';
  }

  getGaaLeader() {
    return this.$http.get(this.gaaUrl)
      .then(gaas => gaas.data);
  }

}

export default GaaService;
