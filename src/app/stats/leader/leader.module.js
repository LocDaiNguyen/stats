import angular from 'angular';

import LeaderComponent from './leader.component';

const LeaderModule = angular.module('leader', [])
  .component('leader', LeaderComponent);

export default LeaderModule;
