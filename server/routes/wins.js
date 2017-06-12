const express = require('express');
const router = express.Router();

const Win = require('../../models/win');

// Get all wins
router.get('/', (req, res, next) => {

  Win.find((err, wins) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching wins',
        data: {error: err, message: 'An error occured fetching wins'}
      });
    }

    if (!wins) {
      return res.status(404).json({
        message: 'Wins not found',
        data: {message: 'Wins not found'}
      });
    }

    return res.status(200).json(wins);
    
  });
});

module.exports = router;
