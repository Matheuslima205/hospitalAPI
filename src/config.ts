import { z } from "zod";

const envSchema = z.object({
    PORT: z.number().int().min(1).max(65432),
    HOST: z.string().default("0.0.0.0"),
});

export const env = envSchema.parse(process.env);