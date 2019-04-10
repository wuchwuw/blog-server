import koaRouter from 'koa-router'
import ArticleController from './controllers/article'
import TagController from './controllers/tag'
import App from '../client/app.js'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
// const router = new Router()
const router = koaRouter()

router.get('/', async (ctx, next) => {
  console.log(ctx.req.url)
  const reactHtml = ReactDOMServer.renderToString(
    <StaticRouter location={ctx.req.url} context={{}}>
      <App />
    </StaticRouter>
  )
  await ctx.render('../views/index.html', {
    html: reactHtml
  })
})

router.get('/topic', (ctx, next) => {
  ctx.body = 'get topic11333333333'
  next()
})

// article

router.post('/article/create', ArticleController.create)

router.get('/article/:id', (ctx, next) => {
  next()
})

// tag

router.post('/tag/create', TagController.create)

router.get('/tag/list', TagController.all)

export default router