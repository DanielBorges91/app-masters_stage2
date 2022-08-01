import express, { NextFunction, Request, Response } from "express";
import { AppError } from './AppError';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ error: true, requiredFields: err.requiredFields, message: err.errorMessage});
    }

    response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });

    return next();
  }
);

export { app };