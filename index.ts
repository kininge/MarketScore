/** @format */

import express, { Express, Request, Response } from "express";
import dotenv, { DotenvParseOutput } from "dotenv";
import bodyParser from "body-parser";
import logger from "./src/services/log.service";
import user from "./src/controllers/user";

const app: Express = express();
const env: DotenvParseOutput | undefined = dotenv.config().parsed;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// basic API to check health of services
app.get("/api_health", (req: Request, res: Response) => {
	res.status(200);
	res.json({ message: "APIs working Fine!" });
});

// all controller routes
app.use("/api/v1/user", user); // user router

app.listen(env?.port, () =>
	logger("info", `Express is running on port ${env?.port}`)
);
