const express = require('express');
const router = express.Router();

const Sv = require('../../models/sv');

// Get all svs
router.get('/', (req, res, next) => {

  Sv.find((err, svs) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching svs',
        data: {error: err, message: 'An error occured fetching svs'}
      });
    }

    if (!svs) {
      return res.status(404).json({
        message: 'Svs not found',
        data: {message: 'Svs not found'}
      });
    }

    return res.status(200).json(svs);
    
  });
});

module.exports = router;
