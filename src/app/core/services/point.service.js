class PointService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.pointUrl = '/api/points';
  }

  getPointLeader() {
    return this.$http.get(this.pointUrl)
      .then(points => points.data);
  }

}

export default PointService;
