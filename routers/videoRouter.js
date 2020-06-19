/** @format */

import { Router } from "express";
import routes from "../routes";
import {
  videoDetail,
  getEditVideo,
  postEditVideo,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controller/videoController";

const videoRouter = Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
