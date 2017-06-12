const express = require('express');
const router = express.Router();

const Goal = require('../../models/goal');

// Get all goals
router.get('/', (req, res, next) => {

  Goal.find((err, goals) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching goals',
        data: {error: err, message: 'An error occured fetching goals'}
      });
    }

    if (!goals) {
      return res.status(404).json({
        message: 'Goals not found',
        data: {message: 'Goals not found'}
      });
    }

    return res.status(200).json(goals);
    
  });
});

module.exports = router;
