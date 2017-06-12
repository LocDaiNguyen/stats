const express = require('express');
const router = express.Router();

const Point = require('../../models/point');

// Get all points
router.get('/', (req, res, next) => {

  Point.find((err, points) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching points',
        data: {error: err, message: 'An error occured fetching points'}
      });
    }

    if (!points) {
      return res.status(404).json({
        message: 'Points not found',
        data: {message: 'Points not found'}
      });
    }

    return res.status(200).json(points);
    
  });
});

module.exports = router;
