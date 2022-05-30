import { Router } from "express";
import { reset as controller } from "../controllers";

const route = Router();

route
  .get("/", controller.list)
  .post("/", controller.create)
  .get("/:idRset", controller.find)
  .put("/:idReset", controller.modify)
  .delete("/:idReset", controller.delete);

export default route;
