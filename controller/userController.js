/** @format */
export const home = (req, res) => {
  console.log(req);
  res.render("home", { pageTitle: "Home" });
};

export const getJoin = (req, res) => {
  console.log(req);
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  console.log("postJoin");
};

export const getLogin = (req, res) => {
  console.log(req);
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = (req, res) => {
  console.log("postLogin");
};

export const logout = (req, res) => {
  console.log(req);
};

export const me = (req, res) => {
  res.render("userDetail", { pageTitle: "Me" });
};

export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "userDetail" });
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile" });
};

export const postEditProfile = (req, res) => {
  console.log(req);
};

export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};

export const postChangePassword = (req, res) => {
  console.log("Changing...");
};
