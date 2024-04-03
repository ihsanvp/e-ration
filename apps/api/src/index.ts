import { Hono } from 'hono';
import { Bindings, Variables } from './utils/bindings';

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

app.get('/', (c) => {
  return c.json(c.env);
});

export default app;
