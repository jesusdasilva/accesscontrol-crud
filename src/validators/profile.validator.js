import { check } from "express-validator";
import { validateResults } from "../utils/handle-validator.util";
import { MESSAGE } from "../configs/constants.config";

const checkQuery = [
  check("name")
    .optional()
    .not()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.NOT_NUMERIC.replace("NAME", "name"))
    .bail()
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "name"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "name"))
];

const checkIdPrfile = [
  check("idProfile")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "idProfile"))
    .bail()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.IS_NUMERIC.replace("NAME", "idProfile"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idProfile"))
];

const checkName = [
  check("name")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "name"))
    .bail()
    .not()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.NOT_NUMERIC.replace("NAME", "name"))
    .bail()
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "name"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "name"))
];

const checkDescription = [
  check("description")
    .optional()
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "description"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "description"))
];

/* A middleware that validates the query string. */
const list = [checkQuery, (req, res, next) => validateResults(req, res, next)];

/* A middleware that validates the name and description fields. */
const create = [
  checkName,
  checkDescription,
  (req, res, next) => validateResults(req, res, next)
];

/* A middleware that validates the idProfile field. */
const find = [
  checkIdPrfile,
  (req, res, next) => validateResults(req, res, next)
];

/* A middleware that validates the idProfile, name and description fields. */
const modify = [
  checkIdPrfile,
  checkName,
  checkDescription,
  (req, res, next) => validateResults(req, res, next)
];

/* A middleware that validates the idProfile field. */
const remove = [
  checkIdPrfile,
  (req, res, next) => validateResults(req, res, next)
];

/* Exporting the functions as an object. */
export default {
  list,
  create,
  find,
  modify,
  remove
};
