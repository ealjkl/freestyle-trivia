import express from "express";
import { appEnv } from "./configs/env";
import { connect as dbConnect } from "./data/connect";
import { router } from "./routes";
import { json } from "body-parser";

const app = express();

app.use(express.json());
app.use(json())

app.use(router);

app.listen(appEnv.PORT, async () => {
  await dbConnect();
  console.log(`App running in port ${appEnv.PORT}`);
});
