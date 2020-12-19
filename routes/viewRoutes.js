const express = require('express');
// const viewsController = require('../controllers/viewsController');
// const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'Hello World'
  });
});

module.exports = router;
