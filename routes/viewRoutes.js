const express = require('express');
const articleController = require('../controllers/articleController');
const viewsController = require('../controllers/viewsController');
// const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', articleController.getOverview);
router.get('/article/:slug', articleController.getArticle);
router.get('/login', viewsController.getLogin);

module.exports = router;
