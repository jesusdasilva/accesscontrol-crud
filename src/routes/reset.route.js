import { Router } from "express";
import { reset as controller } from "../controllers";
import { reset as validator } from "../validators";

const route = Router();

route
  .get("/", validator.list, controller.list)
  .post("/", validator.create, controller.create)
  .get("/:idReset", validator.find, controller.find)
  .patch("/:idReset", validator.modify, controller.modifyActive)
  .delete("/:idReset", validator.remove, controller.delete);

export default route;
