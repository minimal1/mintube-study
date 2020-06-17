/** @format */

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import pug from "pug";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import route from "./routes";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.set("views", "./views");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(route.home, globalRouter);

export default app;
