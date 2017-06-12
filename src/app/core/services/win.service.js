class WinService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.winUrl = '/api/wins';
  }

  getWinLeader() {
    return this.$http.get(this.winUrl)
      .then(wins => wins.data);
  }

}

export default WinService;
