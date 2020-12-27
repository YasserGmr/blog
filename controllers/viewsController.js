exports.getLogin = (req, res, next) => {
  //* 1) Build template
  //* Check if user is logged in, if true: redirect him to the admin page
  const { user } = res.locals;
  if (user) return res.redirect('/api/v1/admin/home');

  //* 2) Render the login page
  res.status(200).render('login', {
    title: "Yasser Goumghar's Blog | Login Page",
  });
};
