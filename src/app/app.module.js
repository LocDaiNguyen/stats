'use strict'

import 'normalize.css';
import 'bootstrap-css-only';

import angular from 'angular';

import uiRouter from '@uirouter/angularjs';
import nvd3 from 'angular-nvd3';

import AppComponent from './app.component';
import CoreModule from './core/core.module';
import StatsModule from './stats/stats.module';
import AboutModule from './about/about.module';

const AppModule = angular.module('app', [
  uiRouter,
  nvd3,
  CoreModule.name,
  StatsModule.name,
  AboutModule.name,
])
  .constant('PRIMARY_COLOUR', '#D50000')
  .config(['$stateProvider', '$urlServiceProvider', function($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.otherwise({ state: 'stats'});
    $stateProvider.state('stats', {
      url: '/stats',
      component: 'stats'
    });
    $stateProvider.state('about', {
      url: '/about',
      component: 'about'
    });
  }])
  .component('app', AppComponent);
