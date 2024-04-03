import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono().use(renderer).get('/', (c) => {
  return c.text("Api")
})

export default app
