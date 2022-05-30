import { Router } from "express";
import { user as controller } from "../controllers";

const route = Router();

route
  .get("/", controller.list)
  .post("/", controller.create)
  .get("/:idUser", controller.find)
  .put("/:idUser", controller.modify)
  .patch("/:idUser", controller.modifyPassword)
  .delete("/:idUser", controller.delete);

export default route;
