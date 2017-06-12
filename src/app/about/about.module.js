import angular from 'angular';

import AboutComponent from './about.component';

const AboutModule = angular.module('about', [])
  .component('about', AboutComponent);

export default AboutModule;
