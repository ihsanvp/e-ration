import { Hono } from 'hono';
import { initializeDatabase } from './utils/database';

const app = new Hono().use(async (c, next) => {
  initializeDatabase(import.meta.env.VITE_FIREBASE_CREDENTIAL, import.meta.env.VITE_FIREBASE_PROJECT_ID,)
  await next()
}).get('/', (c) => {
  return c.text(import.meta.env.VITE_FIREBASE_API_KEY);
});

export default app;
