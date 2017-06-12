const express = require('express');
const router = express.Router();

const Assist = require('../../models/assist');

// Get all assists
router.get('/', (req, res, next) => {

  Assist.find((err, assists) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching assists',
        data: {error: err, message: 'An error occured fetching assists'}
      });
    }

    if (!assists) {
      return res.status(404).json({
        message: 'Assists not found',
        data: {message: 'Assists not found'}
      });
    }

    return res.status(200).json(assists);
    
  });
});

module.exports = router;
