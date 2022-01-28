import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/customError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log('Error occurred:', err.message);

	// @ts-ignore
	const statusCode = err.hasOwnProperty("statusCode") ? err.statusCode : 500
	const message = err.message || "unexpected error occurred"

	return res
				.status(statusCode)
				.send({ message});
};
