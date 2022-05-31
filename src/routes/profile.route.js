import { Router } from "express";
import { profile as controller } from "../controllers";
import { validatorCreate } from "../validators/profile.validation";

const router = Router();

router
  .get("/", controller.list)
  .post("/", validatorCreate, controller.create)
  .get("/:idProfile", controller.find)
  .put("/:idProfile", controller.modify)
  .delete("/:idProfile", controller.delete);

export default router;
