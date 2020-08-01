import multer from "multer";

export const uploadVideo = multer({ dest: "uploads/" }).single("videoFile");
