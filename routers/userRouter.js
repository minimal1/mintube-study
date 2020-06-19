/** @format */

import { Router } from "express";
import routes from "../routes";
import {
  getChangePassword,
  postChangePassword,
  userDetail,
  getEditProfile,
  postEditProfile,
} from "../controller/userController";

const userRouter = Router();

userRouter.get(routes.userDetail(), userDetail);

userRouter.get(routes.editProfile, getEditProfile);
userRouter.post(routes.editProfile, postEditProfile);

userRouter.get(routes.changePassword, getChangePassword);
userRouter.post(routes.changePassword, postChangePassword);

export default userRouter;
