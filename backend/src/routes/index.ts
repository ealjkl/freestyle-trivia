import { Router } from "express";
import { questionsRouter } from "./questions.routes";
import { appSend } from "../utils/sender";

export const router = Router();

router.use("/questions", questionsRouter);

router.get("/", (req, res) => {
  appSend(res, {
    data: "Hello World",
  });
});
