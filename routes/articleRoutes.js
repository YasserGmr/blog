const express = require('express');
const authController = require('../controllers/authController');
const articleController = require('../controllers/articleController');

const router = express.Router();

//* Add an article route
router.use(authController.protect);

router.use(authController.restrictTo('admin'));
router.post('/article', articleController.createArticle);

module.exports = router;
