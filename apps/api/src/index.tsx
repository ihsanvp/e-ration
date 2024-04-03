import { Hono } from 'hono';

const app = new Hono().get('/', (c) => {
  return c.text(import.meta.env.VITE_FIREBASE_API_KEY);
});

export default app;
