const mongoose = require('mongoose');
const slugify = require('slugify');

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please Put a Title for the Blog Post'],
      unique: true
    },
    type: {
      type: String,
      required: [true, 'Please Put a type for The Blog Post'],
      enum: ['article', 'quote', 'book', 'podcast', 'course']
    },
    slug: String,
    cover: {
      type: String,
      required: [true, 'Please Put a Cover for the Blog Post']
    },
    thumbnail: {
      type: String,
      required: [true, 'Please Put a Thumbnail for the Blog Post']
    },
    createdAt: {
      type: Object,
      default: { date: undefined, string: undefined }
    },
    preview: String,
    article: {
      type: Array,
      required: [true, 'Please Put an Article for the Blog Post']
    },
    category: {
      type: [String],
      required: [true, 'Please put a Category for the Blog Post'],
      enum: ['Islam', 'Coding', 'Business', 'Productivity', 'Study']
    }
  }, //) Make sure when we have a field not stored in the database but calculated later show up in the Database
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  }
);

//* Make the Slug unique
articleSchema.index({
  title: 1
});

//) Document Middleware: runs before .save() and .create() and not !insertMany()
articleSchema.pre('save', function(next) {
  //* Put A slug
  this.slug = slugify(this.title, { lower: true });

  //* Add createdAt Property
  this.createdAt.date = new Date();
  this.createdAt.string = this.createdAt.date.toString();

  //* Add preview property
  if (this.type === 'article') {
    this.preview = `${this.article[0].paragraph
      .split(/\s+/)
      .slice(0, 30)
      .join(' ')}...`;
  }

  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
