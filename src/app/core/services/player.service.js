class PlayerService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.playerUrl = '/api/players';
  }

  getAllPlayer() {
    return this.$http.get(this.playerUrl)
      .then(players => players.data);
  }
  
}

export default PlayerService;
