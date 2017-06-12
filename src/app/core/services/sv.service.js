class SvService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.svUrl = '/api/svs';
  }

  getSvLeader() {
    return this.$http.get(this.svUrl)
      .then(svs => svs.data);
  }

}

export default SvService;
