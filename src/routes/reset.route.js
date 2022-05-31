import { Router } from "express";
import { reset as controller } from "../controllers";

const route = Router();

route
  .get("/", controller.list)
  .post("/", controller.create)
  .get("/:idReset", controller.find)
  .patch("/:idReset", controller.modifyActive)
  .delete("/:idReset", controller.delete);

export default route;
