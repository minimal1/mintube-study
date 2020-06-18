/** @format */

import { Router } from "express";
import routes from "../routes";
import {
  getJoin,
  getLogin,
  home,
  logout,
  postJoin,
  postLogin,
  me,
} from "../controller/userController";
import { search } from "../controller/videoController";

const globalRouter = Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.me, me);

globalRouter.get(routes.logout, logout);

export default globalRouter;
