const express = require('express');
const router = express.Router();

const Leader = require('../../models/leader');

// Get all leaders
router.get('/', (req, res, next) => {

  Leader.find((err, leaders) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching leaders',
        data: {error: err, message: 'An error occured fetching leaders'}
      });
    }

    if (!leaders) {
      return res.status(404).json({
        message: 'Leaders not found',
        data: {message: 'Leaders not found'}
      });
    }

    return res.status(200).json(leaders);
    
  });
});

module.exports = router;
