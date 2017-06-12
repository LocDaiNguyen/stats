const express = require('express');
const router = express.Router();

const Player = require('../../models/player');

// Get all players
router.get('/', (req, res, next) => {
  
  Player.find((err, players) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching players',
        data: {error: err, message: 'An error occurred fetching players'}
      });
    }

    if (!players) {
      return res.status(404).json({
        message: 'Players not found',
        data: {message: 'Players not found'}
      });
    }

    return res.status(200).json(players);

  });
});

module.exports = router;