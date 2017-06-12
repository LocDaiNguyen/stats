const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderSchema = new Schema({
  assists: {type: Number},
  faceoffWinPctg: {type: Number},
  gameWinningGoals: {type: Number},
  gamesPlayed: {type: Number},
  goals: {type: Number},
  otGoals: {type: Number},
  penaltyMinutes: {type: Number},
  playerFirstName: {type: String},
  playerId: {type: Number},
  playerLastName: {type: String},
  playerName: {type: String},
  playerPositionCode: {type: String},
  playerTeamsPlayedFor: {type: String},
  plusMinus: {type: Number},
  points: {type: Number},
  pointsPerGame: {type: Number},
  ppGoals: {type: Number},
  ppPoints: {type: Number},
  seasonId: {type: Number},
  shGoals: {type: Number},
  shPoints: {type: Number},
  shiftsPerGame: {type: Number},
  shootingPctg: {type: Number},
  shots: {type: Number},
  timeOnIcePerGame: {type: Number}
});

module.exports = mongoose.model('Leader', LeaderSchema);
