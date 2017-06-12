import controller from './leader.component.controller';
import template from './leader.component.html';
import './leader.component.styl';

const LeaderComponent = {
  bindings: {
    type: '<',
    stat: '<',
    selectedleader: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default LeaderComponent;
