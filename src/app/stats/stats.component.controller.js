class StatsController {

  constructor(
    $q,
    $scope,
    PlayerService,
    PointService,
    GoalService,
    AssistService,
    PlusMinusService,
    GaaService,
    SvService,
    WinService,
    SoService,
    PRIMARY_COLOUR
  ) {
    'ngInject';
    
    this.$q = $q;
    this.$scope = $scope;
    
    this.PlayerService = PlayerService;
    this.PointService = PointService;
    this.GoalService = GoalService;
    this.AssistService = AssistService;
    this.PlusMinusService = PlusMinusService;
    this.GaaService = GaaService;
    this.SvService = SvService;
    this.WinService = WinService;
    this.SoService = SoService;

    this.primary_colour = PRIMARY_COLOUR;
    
    this.pointChartOptions = null;
    this.goalChartOptions = null;
    this.assistChartOptions = null;
    this.plusMinusChartOptions = null;
    this.gaaChartOptions = null;
    this.svChartOptions = null;
    this.winChartOptions = null;
    this.soChartOptions = null;
    
    this.pointLeadersVM = null;
    this.goalLeadersVM = null;
    this.assistLeadersVM = null;
    this.plusMinusLeadersVM = null;
    this.gaaLeadersVM = null;
    this.svLeadersVM = null;
    this.winLeadersVM = null;
    this.soLeadersVM = null;
    
    this.selectedPointLeader = null;
    this.selectedGoalLeader = null;
    this.selectedAssistLeader = null;
    this.selectedPlusMinusLeader = null;
    this.selectedGaaLeader = null;
    this.selectedSvLeader = null;
    this.selectedWinLeader = null;
    this.selectedSoLeader = null;
    
    this.pointData = null;
    this.goalData = null;
    this.assistData = null;
    this.plusMinusData = null;
    this.gaaData = null;
    this.svData = null;
    this.winData = null;
    this.soData = null;

  }



  $onInit() {

    const P_players = this.PlayerService.getAllPlayer();
    const P_points = this.PointService.getPointLeader();
    const P_goals = this.GoalService.getGoalLeader();
    const P_assists = this.AssistService.getAssistLeader();
    const P_plusminuss = this.PlusMinusService.getPlusMinusLeader();
    const P_gaas = this.GaaService.getGaaLeader();
    const P_svs = this.SvService.getSvLeader();
    const P_wins = this.WinService.getWinLeader();
    const P_sos = this.SoService.getSoLeader();

    this.pointChartOptions = this.setChartOptions();
    this.goalChartOptions = this.setChartOptions();
    this.assistChartOptions = this.setChartOptions();
    this.plusMinusChartOptions = this.setChartOptions();
    this.gaaChartOptions = this.setChartOptions();
    this.svChartOptions = this.setChartOptions();
    this.winChartOptions = this.setChartOptions();
    this.soChartOptions = this.setChartOptions();
    this.setGaaChartValue();
    this.setSvChartValue();

    this.$q.all([ P_players, P_points, P_goals, P_assists, P_plusminuss, P_gaas, P_svs, P_wins, P_sos ])
      .then(payload => {
        
        this.pointLeadersVM = payload[1]/* P_points */;
        this.goalLeadersVM = payload[2]/* P_goals */;
        this.assistLeadersVM = payload[3]/* P_assists */;
        this.plusMinusLeadersVM = payload[4]/* P_plusminuss */;
        this.gaaLeadersVM = payload[5]/* P_gaas */;
        this.svLeadersVM = payload[6]/* P_svs */;
        this.winLeadersVM = payload[7]/* P_wins */;
        this.soLeadersVM = payload[8]/* P_sos */;
        
        this.selectedPointLeader = this.pointLeadersVM[0];
        this.selectedGoalLeader = this.goalLeadersVM[0];
        this.selectedAssistLeader = this.assistLeadersVM[0];
        this.selectedPlusMinusLeader = this.plusMinusLeadersVM[0];
        this.selectedGaaLeader = this.gaaLeadersVM[0];
        this.selectedSvLeader = this.svLeadersVM[0];
        this.selectedWinLeader = this.winLeadersVM[0];
        this.selectedSoLeader = this.soLeadersVM[0];
        
        this.pointData = this.getPointData(payload[1]/* P_points */);
        this.goalData = this.getGoalData(payload[2]/* P_goals */);
        this.assistData = this.getAssistData(payload[3]/* P_assists */);
        this.plusMinusData = this.getPlusMinusData(payload[4]/* P_plusminuss */);
        this.gaaData = this.getGaaData(payload[5]/* P_gaas */);
        this.svData = this.getSvData(payload[6]/* P_svs */);
        this.winData = this.getWinData(payload[7]/* P_wins */);
        this.soData = this.getSoData(payload[8]/* P_sos */);
        
        this.setPointChartMouseOver(this.pointLeadersVM);
        this.setGoalChartMouseOver(this.goalLeadersVM);
        this.setAssistChartMouseOver(this.assistLeadersVM);
        this.setPlusMinusChartMouseOver(this.plusMinusLeadersVM);
        this.setGaaChartMouseOver(this.gaaLeadersVM);
        this.setSvChartMouseOver(this.svLeadersVM);
        this.setWinChartMouseOver(this.winLeadersVM);
        this.setSoChartMouseOver(this.soLeadersVM);
      });

  }



  setChartOptions() {
    return {
      chart: {
        type: 'multiBarHorizontalChart',
        height: 300,
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        valueFormat: function (d) { return d3.format(',.0f')(d); },
        duration: 500,
        groupSpacing: 0.7,
        valuePadding: 30,
        showLegend: false,
        showControls: false,
        showValues: true,
        showXAxis: true,
        showYAxis: false,
        xAxis: {
          showMaxMin: false,
          fontSize: 11
        },
        forceY: [0],
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        tooltip: {
          enabled: false
        },
        multibar: {
          dispatch: {
            elementMouseover: function (e) { }
          }
        },
      }
    }
  }



  setGaaChartValue() {
    this.gaaChartOptions.chart.valueFormat = function (d) { return d3.format(',.2f')(d); };
    this.gaaChartOptions.chart.forceY = [1.75, 2.3];
  }
  setSvChartValue() {
    this.svChartOptions.chart.valueFormat = function (d) { return d3.format(',.3f')(d); };
    this.svChartOptions.chart.forceY = [.915, .935];
  }



  setPointChartMouseOver(pointLeaders) {
    this.pointChartOptions.chart.multibar.dispatch.elementMouseover = (e) => {
      this.$scope.$apply(() => this.selectedPointLeader = pointLeaders[e.index]);
    };
  }
  setGoalChartMouseOver(goalLeaders) {
    this.goalChartOptions.chart.multibar.dispatch.elementMouseover = (e) => {
      this.$scope.$apply(() => this.selectedGoalLeader = goalLeaders[e.index]);
    };
  }
  setAssistChartMouseOver(assistLeaders) {
    this.assistChartOptions.chart.multibar.dispatch.elementMouseover = (e) => {
      this.$scope.$apply(() => this.selectedAssistLeader = assistLeaders[e.index]);
    };
  }
  setPlusMinusChartMouseOver(plusMinusLeaders) {
    this.plusMinusChartOptions.chart.multibar.dispatch.elementMouseover = (e) => {
      this.$scope.$apply(() => this.selectedPlusMinusLeader = plusMinusLeaders[e.index]);
    };
  }
  setGaaChartMouseOver(gaaLeaders) {
    this.gaaChartOptions.chart.multibar.dispatch.elementMouseover = (e) => {
      this.$scope.$apply(() => this.selectedGaaLeader = gaaLeaders[e.index]);
    };
  }
  setSvChartMouseOver(svLeaders) {
    this.svChartOptions.chart.multibar.dispatch.elementMouseover = (e) => {
      this.$scope.$apply(() => this.selectedSvLeader = svLeaders[e.index]);
    };
  }
  setWinChartMouseOver(winLeaders) {
    this.winChartOptions.chart.multibar.dispatch.elementMouseover = (e) => {
      this.$scope.$apply(() => this.selectedWinLeader = winLeaders[e.index]);
    };
  }
  setSoChartMouseOver(soLeaders) {
    this.soChartOptions.chart.multibar.dispatch.elementMouseover = (e) => {
      this.$scope.$apply(() => this.selectedSoLeader = soLeaders[e.index]);
    };
  }



  getPointData(leaders) {

    return [
      {
        "key": "Points",
        "color": this.primary_colour,
        "values": [
          { "label": leaders[0].playerName, "value": leaders[0].points },
          { "label": leaders[1].playerName, "value": leaders[1].points },
          { "label": leaders[2].playerName, "value": leaders[2].points },
          { "label": leaders[3].playerName, "value": leaders[3].points },
          { "label": leaders[4].playerName, "value": leaders[4].points },
          { "label": leaders[5].playerName, "value": leaders[5].points },
          { "label": leaders[6].playerName, "value": leaders[6].points },
          { "label": leaders[7].playerName, "value": leaders[7].points },
          { "label": leaders[8].playerName, "value": leaders[8].points },
          { "label": leaders[9].playerName, "value": leaders[9].points }
        ]
      }
    ];
  }
  getGoalData(leaders) {

    return [
      {
        "key": "Goals",
        "color": this.primary_colour,
        "values": [
          { "label": leaders[0].playerName, "value": leaders[0].goals },
          { "label": leaders[1].playerName, "value": leaders[1].goals },
          { "label": leaders[2].playerName, "value": leaders[2].goals },
          { "label": leaders[3].playerName, "value": leaders[3].goals },
          { "label": leaders[4].playerName, "value": leaders[4].goals },
          { "label": leaders[5].playerName, "value": leaders[5].goals },
          { "label": leaders[6].playerName, "value": leaders[6].goals },
          { "label": leaders[7].playerName, "value": leaders[7].goals },
          { "label": leaders[8].playerName, "value": leaders[8].goals },
          { "label": leaders[9].playerName, "value": leaders[9].goals }
        ]
      }
    ];
  }
  getAssistData(leaders) {

    return [
      {
        "key": "Assists",
        "color": this.primary_colour,
        "values": [
          { "label": leaders[0].playerName, "value": leaders[0].assists },
          { "label": leaders[1].playerName, "value": leaders[1].assists },
          { "label": leaders[2].playerName, "value": leaders[2].assists },
          { "label": leaders[3].playerName, "value": leaders[3].assists },
          { "label": leaders[4].playerName, "value": leaders[4].assists },
          { "label": leaders[5].playerName, "value": leaders[5].assists },
          { "label": leaders[6].playerName, "value": leaders[6].assists },
          { "label": leaders[7].playerName, "value": leaders[7].assists },
          { "label": leaders[8].playerName, "value": leaders[8].assists },
          { "label": leaders[9].playerName, "value": leaders[9].assists }
        ]
      }
    ];
  }
  getPlusMinusData(leaders) {

    return [
      {
        "key": "PlusMinus",
        "color": this.primary_colour,
        "values": [
          { "label": leaders[0].playerName, "value": leaders[0].plusMinus },
          { "label": leaders[1].playerName, "value": leaders[1].plusMinus },
          { "label": leaders[2].playerName, "value": leaders[2].plusMinus },
          { "label": leaders[3].playerName, "value": leaders[3].plusMinus },
          { "label": leaders[4].playerName, "value": leaders[4].plusMinus },
          { "label": leaders[5].playerName, "value": leaders[5].plusMinus },
          { "label": leaders[6].playerName, "value": leaders[6].plusMinus },
          { "label": leaders[7].playerName, "value": leaders[7].plusMinus },
          { "label": leaders[8].playerName, "value": leaders[8].plusMinus },
          { "label": leaders[9].playerName, "value": leaders[9].plusMinus }
        ]
      }
    ];
  }
  getGaaData(leaders) {

    return [
      {
        "key": "Goals Against Average",
        "color": this.primary_colour,
        "values": [
          { "label": leaders[0].playerName, "value": leaders[0].goalsAgainstAverage },
          { "label": leaders[1].playerName, "value": leaders[1].goalsAgainstAverage },
          { "label": leaders[2].playerName, "value": leaders[2].goalsAgainstAverage },
          { "label": leaders[3].playerName, "value": leaders[3].goalsAgainstAverage },
          { "label": leaders[4].playerName, "value": leaders[4].goalsAgainstAverage },
          { "label": leaders[5].playerName, "value": leaders[5].goalsAgainstAverage },
          { "label": leaders[6].playerName, "value": leaders[6].goalsAgainstAverage },
          { "label": leaders[7].playerName, "value": leaders[7].goalsAgainstAverage },
          { "label": leaders[8].playerName, "value": leaders[8].goalsAgainstAverage },
          { "label": leaders[9].playerName, "value": leaders[9].goalsAgainstAverage }
        ]
      }
    ];
  }
  getSvData(leaders) {

    return [
      {
        "key": "Save Percentage",
        "color": this.primary_colour,
        "values": [
          { "label": leaders[0].playerName, "value": leaders[0].savePctg },
          { "label": leaders[1].playerName, "value": leaders[1].savePctg },
          { "label": leaders[2].playerName, "value": leaders[2].savePctg },
          { "label": leaders[3].playerName, "value": leaders[3].savePctg },
          { "label": leaders[4].playerName, "value": leaders[4].savePctg },
          { "label": leaders[5].playerName, "value": leaders[5].savePctg },
          { "label": leaders[6].playerName, "value": leaders[6].savePctg },
          { "label": leaders[7].playerName, "value": leaders[7].savePctg },
          { "label": leaders[8].playerName, "value": leaders[8].savePctg },
          { "label": leaders[9].playerName, "value": leaders[9].savePctg }
        ]
      }
    ];
  }
  getWinData(leaders) {

    return [
      {
        "key": "Wins",
        "color": this.primary_colour,
        "values": [
          { "label": leaders[0].playerName, "value": leaders[0].wins },
          { "label": leaders[1].playerName, "value": leaders[1].wins },
          { "label": leaders[2].playerName, "value": leaders[2].wins },
          { "label": leaders[3].playerName, "value": leaders[3].wins },
          { "label": leaders[4].playerName, "value": leaders[4].wins },
          { "label": leaders[5].playerName, "value": leaders[5].wins },
          { "label": leaders[6].playerName, "value": leaders[6].wins },
          { "label": leaders[7].playerName, "value": leaders[7].wins },
          { "label": leaders[8].playerName, "value": leaders[8].wins },
          { "label": leaders[9].playerName, "value": leaders[9].wins }
        ]
      }
    ];
  }
  getSoData(leaders) {

    return [
      {
        "key": "Shutouts",
        "color": this.primary_colour,
        "values": [
          { "label": leaders[0].playerName, "value": leaders[0].shutouts },
          { "label": leaders[1].playerName, "value": leaders[1].shutouts },
          { "label": leaders[2].playerName, "value": leaders[2].shutouts },
          { "label": leaders[3].playerName, "value": leaders[3].shutouts },
          { "label": leaders[4].playerName, "value": leaders[4].shutouts },
          { "label": leaders[5].playerName, "value": leaders[5].shutouts },
          { "label": leaders[6].playerName, "value": leaders[6].shutouts },
          { "label": leaders[7].playerName, "value": leaders[7].shutouts },
          { "label": leaders[8].playerName, "value": leaders[8].shutouts },
          { "label": leaders[9].playerName, "value": leaders[9].shutouts }
        ]
      }
    ];
  }

}

export default StatsController;
