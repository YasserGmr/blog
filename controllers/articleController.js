const multer = require('multer');
const sharp = require('sharp');

const Article = require('../models/articleModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

const filterPreviewArticles = (article) => article.type !== 'quote';

exports.getOverview = catchAsync(async (req, res, next) => {
  //* 1) Get article data from collection and remove quotes from Articles array to prevent it from appearing in the preview section.
  const articles = await Article.find().sort({ createdAt: -1 });
  const filteredArticles = articles.filter(filterPreviewArticles);

  //* 2) Build template
  //* 3) Render that template using tour data from 1)
  res.status(200).render('home', {
    title: "Yasser Goumghar's Blog | Home",
    url: '/',
    articles,
    filteredArticles,
    length: filteredArticles.length,
  });
});

exports.createArticle = factory.createOne(Article);

exports.getArticle = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const article = await Article.findOne({ slug });

  if (!article) {
    return next(new AppError('No article found with that slug', 404));
  }

  res.status(200).render('article', {
    title: `${article.title} | Yasser Goumghar's Blog`,
    article,
  });
});

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

//! Testing

exports.uploadTourImages = upload.fields([
  { name: 'cover', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 },
]);

exports.resizeTourImages = catchAsync(async (req, res, next) => {
  //* This is for Testing Purposes
  // return next();

  if (!req.files.cover || !req.files.thumbnail) {
    const err = new AppError('Please upload a cover and a thumbnail', 400);
    return next(err);
  }

  //· 1) Cover image
  req.body.cover = req.files.cover[0].originalname;
  await sharp(req.files.cover[0].buffer)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/images/thumbs/masonry/${req.body.cover}`);

  //· 2) Thumbnail image
  req.body.thumbnail = req.files.thumbnail[0].originalname;
  await sharp(req.files.thumbnail[0].buffer)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/images/thumbs/masonry/gallery/${req.body.thumbnail}`);

  res.status(200).json({
    message: 'Upload Succeded',
  });
});

// exports.editArticle = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     message: 'Helo World'
//   });
// });

// exports.deleteArticle = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     message: 'Helo World'
//   });
// });
