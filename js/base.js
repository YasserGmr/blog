export const elements = {
  login: document.getElementById('login'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  form: document.querySelector('.login__form'),
};

export const requests = {
  loginReq: '/api/v1/users/login',
};

export const message = {
  successMessage:
    "Mrhba b si Yasser, Don't forget: {يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ}",
  failureMessage:
    "Nah, Wrong Password, Don't forget: {من أطاعني دخل الجنة، ومن عصاني فقد أبى}",
};
