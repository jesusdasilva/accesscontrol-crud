import { Router } from "express";
import { user as controller } from "../controllers";
import { user as validator } from "../validators";

const route = Router();

route
  .get("/", validator.list, controller.list)
  .post("/", validator.create, controller.create)
  .get("/:idUser", validator.find, controller.find)
  .put("/:idUser", validator.modify, controller.modify)
  .patch("/:idUser", validator.modifyPassword, controller.modifyPassword)
  .delete("/:idUser", validator.remove, controller.delete);

export default route;