const express = require('express');
const router = express.Router();

const PlusMinus = require('../../models/plus-minus');

// Get all plusminuss
router.get('/', (req, res, next) => {

  PlusMinus.find((err, plusminuss) => {

    if (err) {
      return res.status(500).json({
        message: 'An error occurred fetching plusminuss',
        data: {error: err, message: 'An error occured fetching plusminuss'}
      });
    }

    if (!plusminuss) {
      return res.status(404).json({
        message: 'PlusMinuss not found',
        data: {message: 'PlusMinuss not found'}
      });
    }

    return res.status(200).json(plusminuss);
    
  });
});

module.exports = router;
