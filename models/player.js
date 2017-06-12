const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  // { "id" : 8480081, "primaryNumber" : "32", "currentTeamId" : 1, "currentTeamName" : "New Jersey Devils", "position" : "D" }
  id: {type: Number},
  primaryNumber: {type: Number},
  currentTeamId: {type: Number},
  currentTeamName: {type: String},
  position: {type: String}
});

module.exports = mongoose.model('Player', PlayerSchema);
