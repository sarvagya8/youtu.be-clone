import express from "express";
import es6Renderer from "express-es6-template-engine";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";
import helmet from "helmet";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express();

app.engine("html", es6Renderer);
app.set("views", "views");
app.set("view engine", "html");
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
