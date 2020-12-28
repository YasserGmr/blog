export const elements = {
  login: document.getElementById('login'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  form: document.querySelector('.login__form'),
  articleInput: document.getElementById('exampleMessage'),
  article: document.getElementById('article'),
  subArticle: document.getElementById('subArticle'),
  articleList: document.getElementById('sampleRecipientInput'),
  articleTypesOptions: document.getElementById('articleTypes'),
  inputOptions: document.querySelectorAll('.inputOptions'),
  photo: document.getElementById('photo'),
  addArticleForm: document.getElementById('addArticle__form'),
};

export const requests = {
  loginReq: '/api/v1/users/login',
  addArticleReq: '/api/v1/admin/article',
  addPicureReq: '/api/v1/admin/article/picutres',
};

export const message = {
  successMessage:
    "Mrhba b si Yasser, Don't forget: {يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ}",
  failureMessage:
    "Nah, Wrong Password, Don't forget: {من أطاعني دخل الجنة، ومن عصاني فقد أبى}",
};
