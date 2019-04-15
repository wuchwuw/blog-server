import koaRouter from 'koa-router'
import ArticleController from './controllers/article'
import TagController from './controllers/tag'
import { createApp } from '../client/entry-server.js'

// const router = new Router()
const router = koaRouter()

router.get('*', async (ctx, next) => {
  console.log('*')
  let component = createApp({}, ctx.url)
  const reactHtml = ReactDOMServer.renderToString(
    component
  )
  await ctx.render('../views/index.html', {
    html: reactHtml
  })
  next()
})

router.get('/topic', (ctx, next) => {
  console.log('/topic')
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