import koaRouter from 'koa-router'
import ArticleController from './controllers/article'
import TagController from './controllers/tag'
import { createApp } from '../client/entry-server.js'
import fs from 'fs'
import path from 'path'

// const router = new Router()
const router = koaRouter()

// router.get('*', async (ctx, next) => {
//   console.log('*')
//   let component = createApp({}, ctx.url)
//   const reactHtml = ReactDOMServer.renderToString(
//     component
//   )
//   await ctx.render('../views/index.html', {
//     html: reactHtml
//   })
//   next()
// })

// router.get('/topic', (ctx, next) => {
//   fs.readFile(path.resolve(__dirname, '../mock/post.json'), (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       ctx.send(data)
//     }
//   })
// })

// article

router.post('/article/create', ArticleController.create)

router.get('/article/:id', (ctx, next) => {
  next()
})

// tag

router.post('/tag/create', TagController.create)

router.get('/tag/list', TagController.all)

export default router