import { check } from "express-validator";
import { validateResults } from "../utils/handle-validator.util";
import { MESSAGE } from "../configs/constants.config";

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
];

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
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "email"))
];

const checkIdPrfile = [
  check("idProfile")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "idProfile"))
    .bail()
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "idProfile"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idProfile"))
];

const checkPassword = [
  check("password")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "password"))
    .bail()
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "password"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "password"))
];

const checkIdUser = [
  check("idUser")  
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "idUser"))
    .bail()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.IS_NUMERIC.replace("NAME", "idUser"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idUser"))
];

const list = [checkQuery, (req, res, next) => validateResults(req, res, next)];

const create = [
  checkIdUser,
  checkName,
  checkEmail,
  checkIdPrfile,
  (req, res, next) => validateResults(req, res, next)
];

const find = [checkIdUser, (req, res, next) => validateResults(req, res, next)];

const modify = [
  checkIdUser, 
  checkName, 
  checkEmail, 
  checkPassword, 
  (req, res, next) => validateResults(req, res, next)
];

const modifyPassword = [
  checkIdUser,
  checkPassword,
  (req, res, next) => validateResults(req, res, next)
];

export default {
  list,
  create,
  find,
  modify,
  modifyPassword,
  remove: find
};
