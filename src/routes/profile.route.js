import { Router } from "express";
import { profile as controller } from "../controllers";

const router = Router();

router
  .get("/", controller.list)
  .post("/", controller.create)
  .get("/:idProfile", controller.find)
  .put("/:idProfile", controller.modify)
  .delete("/:idProfile", controller.delete);

export default router;
