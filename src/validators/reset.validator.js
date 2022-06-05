import { check } from "express-validator";
import { validateResults } from "../utils/handle-validator.util";
import { MESSAGE } from "../configs/constants.config";

const checkQuery = [
  check("idUser")
    .optional()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idUser"))
    .bail()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.IS_NUMERIC.replace("NAME", "idUser")),
  check("idRequestedBy")
    .optional()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idRequestedBy"))
    .bail()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.IS_NUMERIC.replace("NAME", "idRequestedBy")),
  check("active")
    .optional()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "active"))
    .bail()
    .isBoolean()
    .withMessage(MESSAGE.VALIDATOR.IS_BOOLEAN.replace("NAME", "active"))
];

const checkIdUser = [
  check("idUser")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "idReset"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idUser"))
    .bail()
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "idUser"))
];

const checkIdRequestedBy = [
  check("idRequestedBy")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "idReset"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idRequestedBy"))
    .bail()
    .isString()
    .withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "idRequestedBy"))
];

const checkIdReset = [
  check("idReset")
    .exists()
    .withMessage(MESSAGE.VALIDATOR.REQUIRED.replace("NAME", "idReset"))
    .bail()
    .notEmpty()
    .withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "idReset"))
    .bail()
    .isNumeric()
    .withMessage(MESSAGE.VALIDATOR.IS_NUMERIC.replace("NAME", "idReset")),
];

const list = [checkQuery, (req, res, next) => validateResults(req, res, next)];

const create = [ checkIdUser, checkIdRequestedBy, (req, res, next) => validateResults(req, res, next)];

const  find = [ checkIdReset, (req, res, next) => validateResults(req, res, next)];

export default {
  list,
  create,
  find,
  modify: find,
  remove: find 
};
