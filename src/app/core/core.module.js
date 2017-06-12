import angular from 'angular';

// import other modules
// import other services
import PlayerService from './services/player.service';
import LeaderService from './services/leader.service';
import PointService from './services/point.service';
import GoalService from './services/goal.service';
import AssistService from './services/assist.service';
import PlusMinusService from './services/plus-minus.service';
import GaaService from './services/gaa.service';
import SvService from './services/sv.service';
import WinService from './services/win.service';
import SoService from './services/so.service';

const CoreModule = angular.module('core', [])
  .service('PlayerService', PlayerService)
  .service('LeaderService', LeaderService)
  .service('PointService', PointService)
  .service('GoalService', GoalService)
  .service('AssistService', AssistService)
  .service('PlusMinusService', PlusMinusService)
  .service('GaaService', GaaService)
  .service('SvService', SvService)
  .service('WinService', WinService)
  .service('SoService', SoService);

export default CoreModule;
