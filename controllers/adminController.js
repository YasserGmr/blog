exports.admin = (req, res, next) => {
  //* 1) Build template
  //* Check if user is logged in, make this page only if logged in
  //
  //* 2) Render the login page
  res.status(200).render('admin', {
    title: "Yasser Goumghar's Blog | Admin Page",
  });
};
