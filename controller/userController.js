/** @format */
export const getHome = (req, res) => {
  console.log(req);
  res.render("Home");
};

export const getJoin = (req, res) => {
  console.log(req);
  res.render("Join");
};

export const getLogin = (req, res) => {
  console.log(req);
  res.render("Login");
};

export const getLogout = (req, res) => {
  console.log(req);
  res.render("Logout");
};
