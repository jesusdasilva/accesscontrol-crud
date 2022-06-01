import { check } from "express-validator";
import { validateResults } from "../utils/handle-validator.util";
import { MESSAGE } from "../configs/constants.config";

const list = [
  check("name")
    .optional().not().isNumeric().withMessage(MESSAGE.VALIDATOR.NOT_NUMERIC.replace("NAME", "name"))
    .isString().withMessage(MESSAGE.VALIDATOR.IS_STRING.replace("NAME", "name"))
    .notEmpty().withMessage(MESSAGE.VALIDATOR.NOT_EMPTY.replace("NAME", "name")),
  (req, res, next) => validateResults(req, res, next)
];

const create = [
  check("name")
    .exists()
    .withMessage("The name is requered")
    .isString()
    .withMessage("The name must be a string")
    .notEmpty()
    .withMessage("The name can not be empty"),
  check("description")
    .optional()
    .isString()
    .withMessage("The description can not be empty")
    .notEmpty()
    .withMessage("The name can not be empty"),
  (req, res, next) => validateResults(req, res, next)
];

const find = [
  check("idProfile")
    .exists()
    .withMessage("The idProfile is requered")
    .isNumeric()
    .withMessage("The idProfile must be a number")
    .notEmpty()
    .withMessage("The idProfile can not be empty"),
  (req, res, next) => validateResults(req, res, next)
];

export default {
  list,
  create,
  find
};
