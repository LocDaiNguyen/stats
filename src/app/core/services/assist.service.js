class AssistService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.assistUrl = '/api/assists';
  }

  getAssistLeader() {
    return this.$http.get(this.assistUrl)
      .then(assists => assists.data);
  }

}

export default AssistService;
