class SoService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.soUrl = '/api/sos';
  }

  getSoLeader() {
    return this.$http.get(this.soUrl)
      .then(sos => sos.data);
  }

}

export default SoService;
