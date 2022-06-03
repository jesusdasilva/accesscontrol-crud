import { Router } from "express";
import { user as controller } from "../controllers";
import { user as validator } from "../validators";

const route = Router();

route
  .get("/", validator.list, controller.list)
  .post("/", controller.create)
  .get("/:idUser", controller.find)
  .put("/:idUser", controller.modify)
  .patch("/:idUser", controller.modifyPassword)
  .delete("/:idUser", controller.delete);

export default route;
