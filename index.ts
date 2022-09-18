/** @format */

import express, { Express, Request, Response } from "express";
import dotenv, { DotenvParseOutput } from "dotenv";
import logger from "./src/services/log.service";

const app: Express = express();
const env: DotenvParseOutput | undefined = dotenv.config().parsed;

// controllers declared
app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.listen(env?.port, () =>
	logger("info", `Express is running on port ${env?.port}`)
);
