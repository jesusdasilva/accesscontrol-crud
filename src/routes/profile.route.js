import { Router } from "express";
import { profile as controller } from "../controllers";
import { profile as validator } from "../validators";

const router = Router();

router
  .get("/", validator.list, controller.list)
  .post("/", validator.create, controller.create)
  .get("/:idProfile", validator.find, controller.find)
  .put("/:idProfile", validator.modify, controller.modify)
  .delete("/:idProfile", validator.remove, controller.delete);

export default router;
