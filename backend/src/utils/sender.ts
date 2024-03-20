import type { Response } from "express";

type ResponsePayload<T = any> =
  | {
      data: T;
    }
  | {
      errors: Errors;
    };

type Errors = {
  serverError?: ServerError;
  notFoundError?: NotFoundError;
};

type ServerError = {
  message: string;
};

type NotFoundError = {
  message: string;
};

export function appSend<T>(res: Response, payload: ResponsePayload) {
  res.send(payload);
}
