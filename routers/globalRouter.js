/** @format */

import { Router } from "express";
import route from "../routes";
import {
  getJoin,
  getLogin,
  getLogout,
  getHome,
} from "../controller/userController";

const globalRouter = Router();

globalRouter.get(route.home, getHome);
globalRouter.get(route.join, getJoin);
globalRouter.get(route.login, getLogin);
globalRouter.get(route.logout, getLogout);

export default globalRouter;
