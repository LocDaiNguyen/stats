class PlusMinusService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.plusminusUrl = '/api/plusminuss';
  }

  getPlusMinusLeader() {
    return this.$http.get(this.plusminusUrl)
      .then(plusminuss => plusminuss.data);
  }

}

export default PlusMinusService;
