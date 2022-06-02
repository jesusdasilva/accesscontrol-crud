import { check } from "express-validator";
import { validateResults } from "../utils/handle-validator.util";
import { MESSAGE } from "../configs/constants.config";

const checkIdPrfile = [
  check("idProfile")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "idProfile"))
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.IS_NUMERIC.replace("NAME", "idProfile"))
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idProfile"))
];

const checkName = [
  check("name")
    .optional()
    .not()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.NOT_NUMERIC.replace("NAME", "name"))
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "name"))
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "name"))
];

const checkDescription = [
  check("email")
    .optional()
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "description"))
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "description"))
];

const list = [checkName, (req, res, next) => validateResults(req, res, next)];

const create = [
  checkName,
  checkDescription,
  (req, res, next) => validateResults(req, res, next)
];

const find = [
  checkIdPrfile,
  (req, res, next) => validateResults(req, res, next)
];

const modify = [
  checkIdPrfile,
  checkName,
  checkDescription,
  (req, res, next) => validateResults(req, res, next)
];

const remove = [
  checkIdPrfile,
  (req, res, next) => validateResults(req, res, next)
];

export default {
  list,
  create,
  find,
  modify,
  remove
};
