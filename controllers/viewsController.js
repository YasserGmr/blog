exports.getLogin = (req, res, next) => {
  //* 1) Build template
  //* 2) Render the login page
  res.status(200).render('login', {
    title: "Yasser Goumghar's Blog | Admin Page"
  });
};
