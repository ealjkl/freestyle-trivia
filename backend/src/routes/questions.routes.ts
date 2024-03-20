import { Router } from "express";
import { Question } from "../data/schemas/questions.schema";
import { appSend } from "../utils/sender";

export const questionsRouter = Router();

questionsRouter.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    return appSend(res, {
      data: questions,
    });
  } catch (e) {
    appSend(res.status(500), {
      errors: {
        serverError: {
          message: "Something went wrong!",
        },
      },
    });
  }
});

questionsRouter.post("/", async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    appSend(res, {
      data: question,
    });
  } catch (e) {
    appSend(res.status(500), {
      errors: {
        serverError: {
          message: "Something went wrong!",
        },
      },
    });
  }
});

questionsRouter.get("/:id", async (req, res) => {
  try {
    const question = Question.find({ _id: req.params.id });
    if (!question) {
      return appSend(res.status(404), {
        errors: {
          notFoundError: {
            message: "notFound",
          },
        },
      });
    }
  } catch (e) {
    appSend(res.status(500), {
      errors: {
        serverError: {
          message: "Something went wrong!",
        },
      },
    });
  }
});

questionsRouter.put("/:id", async (req, res) => {
  try {
    const question = await Question.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!question) {
      appSend(res.status(404), {
        errors: {
          notFoundError: {
            message: "Question not found",
          },
        },
      });
    }
    appSend(res, {
      data: question,
    });
  } catch (e) {
    appSend(res.status(500), {
      errors: {
        serverError: {
          message: "Something went wrong!",
        },
      },
    });
  }
});

questionsRouter.delete("/:id", async (req, res) => {
  try {
    const question = await Question.findOneAndDelete({ _id: req.params.id });
    if (!question) {
      return appSend(res, {
        errors: {
          notFoundError: {
            message: "Question not Found",
          },
        },
      });
    }
    return appSend(res, {
      data: question,
    });
  } catch (e) {
    return appSend(res, {
      errors: {
        serverError: {
          message: "Something went wrong!",
        },
      },
    });
  }
});
