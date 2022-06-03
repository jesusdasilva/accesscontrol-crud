import { check } from "express-validator";
import { validateResults } from "../utils/handle-validator.util";
import { MESSAGE } from "../configs/constants.config";

/* A validation for the query params. */
const checkQuery = [
  check("email")
    .optional()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "email"))
    .bail()
    .isEmail()
    .withMessage(MESSAGE.VALIDATOR.IS_EMAIL.replace("NAME", "email")),
  check("idProfile")
    .optional()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idProfile"))
    .bail()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.IS_NUMERIC.replace("NAME", "idProfile"))
    .bail()
];

/* A validation for the name field. */
const checkName = [
  check("name")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "name"))
    .bail()                                
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "name"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "name"))
];

const checkEmail = [
  check("email")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "email"))
    .bail()
    .isEmail()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "email"))
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "email"))
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



const list = [checkQuery, (req, res, next) => validateResults(req, res, next)];

// const create = [
//   checkName,
//   checkDescription,
//   (req, res, next) => validateResults(req, res, next)
// ];

// const find = [
//   checkIdPrfile,
//   (req, res, next) => validateResults(req, res, next)
// ];

// const modify = [
//   checkIdPrfile,
//   checkName,
//   checkDescription,
//   (req, res, next) => validateResults(req, res, next)
// ];

// const remove = [
//   checkIdPrfile,
//   (req, res, next) => validateResults(req, res, next)
// ];

export default {
  list,
  // create,
  // find,
  // modify,
  // remove
};
