import { jsxRenderer } from 'hono/jsx-renderer'
import { html } from 'hono/html'
import 'hono'

declare module 'hono' {
  interface ContextRenderer {
    (content: string, props?: { title?: string }): Response
  }
}

export const renderer = jsxRenderer(({ children, title }) => {
  return html`<!DOCTYPE html>
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <title>${title}</title>
      </head>
      <body>
        ${children}
      </body>
    </html>`
})
