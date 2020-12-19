const Article = require('../models/articleModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getOverview = catchAsync(async (req, res, next) => {
  //* 1) Get article data from collection
  const articles = await Article.find().sort({ createdAt: -1 });

  //* 2) Build template
  //* 3) Render that template using tour data from 1)
  res.status(200).render('home', {
    title: "Yasser Goumghar's Blog | Home",
    url: '/',
    articles,
    length: articles.length
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
    article
  });
});
