const express = require('express');
const router = express.Router();

const So = require('../../models/so');

// Get all sos
router.get('/', (req, res, next) => {

  So.find((err, sos) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching sos',
        data: {error: err, message: 'An error occured fetching sos'}
      });
    }

    if (!sos) {
      return res.status(404).json({
        message: 'Sos not found',
        data: {message: 'Sos not found'}
      });
    }

    return res.status(200).json(sos);
    
  });
});

module.exports = router;
