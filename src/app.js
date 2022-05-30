import express, { json } from "express";
import cors from "cors";
import { profile, user, reset } from "./routes";
import { responseFormat, errorHandler } from "./middlewares";
import { conn } from "./configs/conn.config";
import { SERVER_PORT, ORIGIN_URL } from "./configs/app.config";

const app = express();

app.use(cors({ origin: ORIGIN_URL }));
app.use(json());

app.use("/api/v1/profile", profile, responseFormat);
app.use("/api/v1/user", user, responseFormat);
app.use("/api/v1/reset", reset, responseFormat);

app.use(errorHandler);

app.set(conn)
app.set("port", SERVER_PORT);

export default app;
