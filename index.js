/** @format */
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./model/Video";
import "./model/Comment";

const { PORT } = process.env;

const handleListening = () => {
  console.log(`✅ Listening on:${PORT}`);
};

app.listen(PORT, handleListening);
