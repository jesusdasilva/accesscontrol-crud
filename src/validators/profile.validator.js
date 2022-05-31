import { check } from "express-validator";
import { validationResults }  from "../utils/handle-validator.util";

const validatorCreate = [
  check("name", "The name is required").exists().isString().notEmpty(),
  check("description").isString(),
  (req, res, next) => { return validationResults(req, res, next) }
];

export { validatorCreate };
