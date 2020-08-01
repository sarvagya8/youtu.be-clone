import express from "express";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.editProfile(), getEditProfile);
userRouter.post(routes.editProfile(), postEditProfile);
userRouter.get(routes.changePassword(), getChangePassword);
userRouter.post(routes.changePassword(), postChangePassword);

export default userRouter;
