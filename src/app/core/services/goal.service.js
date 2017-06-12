class GoalService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.goalUrl = '/api/goals';
  }

  getGoalLeader() {
    return this.$http.get(this.goalUrl)
      .then(goals => goals.data);
  }

}

export default GoalService;
