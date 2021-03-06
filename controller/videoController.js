/** @format */
import Video from "../model/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  res.render("search", { pageTitle: "Search" });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
  console.log("Uploading...");
};

export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "Video Detail" });
};

export const getEditVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "Edit Video" });
};

export const postEditVideo = (req, res) => {
  console.log("Editing...");
};

export const deleteVideo = (req, res) => {
  console.log("Deleting...");
};
