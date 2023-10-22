import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-pages'
import app from './src'

const worker = new Hono()
worker.get('/static/*', serveStatic())

worker.route('/', app)

export default worker
