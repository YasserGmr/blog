const express = require('express');
const authController = require('../controllers/authController');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.use(authController.protect);

router.use(authController.restrictTo('admin'));

//* Create, Read, Update, Delete an article route
router.route('/article').post(articleController.createArticle);
router
  .route('/article/picutres')
  //   .post(articleController.uploadPhoto, articleController.addPictures);
  .post(articleController.uploadTourImages, articleController.resizeTourImages);

//   .patch(articleController.editArticle)
//   .delete(articleController.deleteArticle);

module.exports = router;
