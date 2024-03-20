import { z } from "zod";

const envSchema = z.object({
  MONGO_URI: z.string().min(1),
  PORT: z.string().min(1),
});

export const appEnv = envSchema.parse(process.env);