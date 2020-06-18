/** @format */

import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Mintube";
  res.locals.routes = routes;
  next();
};
