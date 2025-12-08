import { z }from 'zod'

export const envSchema = z.object({
  MODE: z.enum(['development','production', 'test']),
  VITE_BASE_URL: z.string(),
  VITE_DELAY_API: z.coerce.boolean(),
});


export const env = envSchema.parse(import.meta.env)