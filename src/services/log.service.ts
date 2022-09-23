/** @format */

import { createLogger, format, transports, Logger } from "winston";

const { combine, timestamp, json, printf, prettyPrint, splat } = format;

// custom logging format
const loggingFromat = printf(
	(log) => `${log.level.toUpperCase()} :: ${log.timestamp} : ${log.message}`
);

// object of logger and structure of log
const loggerRegister: Logger = createLogger({
	format: combine(
		timestamp({ format: "DD MMM YYYY, HH:mm:ss" }),
		prettyPrint(),
		json(),
		splat(),
		loggingFromat
	),
	transports: [
		new transports.Console(),
		new transports.File({ filename: "combined.log", format: json() }),
	],
});

// function that log and send error emails
const logger = (level: "error" | "info", message: String) => {
	if (level === "error") {
		// feedback to author
	}

	// log
	loggerRegister.log(level, message);
};

export default logger;
