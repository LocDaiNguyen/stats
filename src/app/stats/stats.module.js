import angular from 'angular';

import StatsComponent from './stats.component';
import LeaderModule from './leader/leader.module';

const StatsModule = angular.module('stats', [
  LeaderModule.name
])
  .component('stats', StatsComponent);

export default StatsModule;
