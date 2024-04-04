import { Hono } from 'hono';
import { Bindings, Variables } from '../utils/bindings';

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>().get('/', async (c) => {
  return c.text('items');
});

export default app;
