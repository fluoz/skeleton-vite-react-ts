import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string(),
  // Add other environment variables as needed
});

export const env = envSchema.parse({
  VITE_API_URL: import.meta.env.VITE_API_URL,
});
