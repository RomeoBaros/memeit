import express from "express";

import { userController } from "../controllers/users";
import { authorization } from "../middleware";

const router = express.Router();
router.get("/user", authorization, userController);

export { router as usersRouter };
