class LeaderService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.leaderUrl = '/api/leaders';
  }

  getAllLeader() {
    return this.$http.get(this.leaderUrl)
      .then(leaders => leaders.data);
  }

}

export default LeaderService;
