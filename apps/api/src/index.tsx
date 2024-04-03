import { Hono } from 'hono'

const app = new Hono().get('/', (c) => {
  return c.text("Api 2")
})

export default app
