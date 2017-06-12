const express = require('express');
const router = express.Router();

const Gaa = require('../../models/gaa');

// Get all gaas
router.get('/', (req, res, next) => {

  Gaa.find((err, gaas) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching gaas',
        data: {error: err, message: 'An error occured fetching gaas'}
      });
    }

    if (!gaas) {
      return res.status(404).json({
        message: 'Gaas not found',
        data: {message: 'Gaas not found'}
      });
    }

    return res.status(200).json(gaas);
    
  });
});

module.exports = router;
