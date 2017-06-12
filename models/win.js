const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WinSchema = new Schema({
  assists: {type: Number},
  gamesPlayed: {type: Number},
  gamesStarted: {type: Number},
  goals: {type: Number},
  goalsAgainst: {type: Number},
  goalsAgainstAverage: {type: Number},
  losses: {type: Number},
  otLosses: {type: Number},
  penaltyMinutes: {type: Number},
  playerFirstName: {type: String},
  playerId: {type: Number},
  playerLastName: {type: String},
  playerName: {type: String},
  playerPositionCode: {type: String},
  playerTeamsPlayedFor: {type: String},
  points: {type: Number},
  savePctg: {type: Number},
  saves: {type: Number},
  seasonId: {type: Number},
  shotsAgainst: {type: Number},
  shutouts: {type: Number},
  ties: {type: Number},
  timeOnIce: {type: Number},
  wins: {type: Number}
})

module.exports = mongoose.model('Win', WinSchema);
