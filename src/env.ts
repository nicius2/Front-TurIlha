import { z }from 'zod'
import "dotenv"

export const envSchema = z.object({
  MODE: z.enum(['development','production', 'test']),
  VITE_BASE_URL: z.string(),
  VITE_DELAY_API: z.coerce.boolean(),

  VITE_FIREBASE_API_KEY: z.string(),
  VITE_FIREBASE_AUTH_DOMAIN: z.string(),
  VITE_FIREBASE_PROJECT_ID: z.string(),
  VITE_FIREBASE_STORAGE_BUCKET: z.string(),
  VITE_FIREBASE_MESSAGING_SENDER_ID: z.string(),
  VITE_FIREBASE_APP_ID: z.string(),
  VITE_FIREBASE_MEASUREMENT_ID: z.string(),
});


export const env = envSchema.parse(process.env)