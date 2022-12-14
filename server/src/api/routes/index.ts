import express from "express";

import { authRouter } from "./auth.routes";
import { memesRouter } from "./memes.routes";
import { usersRouter } from "./users.routes";

export const router = express.Router();
router.use("/api/auth", authRouter);
router.use("/api/memes", memesRouter);
router.use("/api/users", usersRouter);
