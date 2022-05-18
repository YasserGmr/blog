const mongoose = require('mongoose');
const slugify = require('slugify');
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please Put a Title for the Blog Post'],
      unique: true,
    },
    type: {
      type: String,
      required: [true, 'Please Put a type for The Blog Post'],
      enum: ['article', 'quote', 'book', 'podcast', 'course'],
    },
    slug: String,
    cover: {
      type: String,
      // required: [true, 'Please Put a Cover for the Blog Post'],
    },
    thumbnail: {
      type: String,
      // required: [true, 'Please Put a Thumbnail for the Blog Post'],
    },
    createdAt: {
      type: Object,
      default: { date: undefined, string: undefined },
    },
    preview: String,
    // markdown: {
    //   type: String,
    //   required: [true, 'Please Put the markdown for the Blog Post'],
    // },
    // sanitizedHtml: {
    //   type: String,
    // },
    article: {
      type: Array,
    },
    category: {
      type: [String],
      required: [true, 'Please put a Category for the Blog Post'],
      enum: ['Islam', 'Coding', 'Business', 'Productivity', 'Study'],
    },
  }, //) Make sure when we have a field not stored in the database but calculated later show up in the Database
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

//* Make the Slug unique
articleSchema.index({
  title: 1,
});

//) Document Middleware: runs before .save() and .create() and not !insertMany()
articleSchema.pre('save', function (next) {
  //* Put A slug
  if (this.title) this.slug = slugify(this.title, { lower: true });

  //* Add createdAt Property
  this.createdAt.date = new Date();
  this.createdAt.string = this.createdAt.date.toString();

  //* Add preview property
  // if (this.type === 'article') {
  //   this.preview = `${this.article.split(/\s+/).slice(0, 30).join(' ')}...`;
  // }

  // if (this.markdown)
  //   this.sanitizedHtml = dompurify.sanitize(
  //     marked(this.markdown, {
  //       headerIds: false,
  //     })
  //   );

  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
