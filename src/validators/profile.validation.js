import Joi from "joi";
import validateRequest from "./request.validator";

function createProrfile(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().empty("")
  });

  validateRequest(req, res, next, schema);
}

export default {
  createProrfile
};
