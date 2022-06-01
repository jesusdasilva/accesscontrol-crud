import { validationResult } from "express-validator";

export function validateResults(req, _, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = { msg: errors.array(), name: "ValidationError" };
  
    next(error);
  }

  next();
};