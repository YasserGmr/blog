const express = require('express');
const articleController = require('../controllers/articleController');
// const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', articleController.getOverview);
router.get('/article/:slug', articleController.getArticle);

module.exports = router;
