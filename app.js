/** @format */

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import pug from "pug";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import { localMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.set("views", "./views");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
