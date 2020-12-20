const express = require('express');
// const authController = require('../controllers/authController');
const Newsletter = require('./../models/newsletterModel');
const factory = require('./../controllers/handlerFactory');

const router = express.Router();

//* Add an article route
router.post('/addNewsLetter', factory.createOne(Newsletter));

module.exports = router;
