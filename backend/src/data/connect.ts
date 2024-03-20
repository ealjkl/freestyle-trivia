import mongoose from "mongoose";
import { appEnv } from "../configs/env";

export async function connect() {
  const MONGO_URI = appEnv.MONGO_URI;
  return mongoose.connect(MONGO_URI);
}
