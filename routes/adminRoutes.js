const express = require('express');
const authController = require('../controllers/authController');
const articleController = require('../controllers/articleController');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.use(authController.protect, authController.restrictTo('admin'));

// router.get('/home', adminController.admin);

//* Create, Read, Update, Delete an article route
router.route('/article').post(articleController.createArticle);
router
  .route('/article/picutres')
  .post(articleController.uploadTourImages, articleController.resizeTourImages);

module.exports = router;
