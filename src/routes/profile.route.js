import { Router } from "express";
import { profile as controller } from "../controllers";
import validator from "../validators/profile.validator";

const router = Router();

router
  .get("/", validator.list, controller.list)
  .post("/", validator.create, controller.create)
  .get("/:idProfile", validator.find, controller.find)
  .put("/:idProfile", controller.modify)
  .delete("/:idProfile", controller.delete);

export default router;
