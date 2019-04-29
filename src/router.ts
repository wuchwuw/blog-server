import Router from 'koa-router'
import ArticleController from './controllers/article'
import TagController from './controllers/tag'

// const router = new Router()
const router = new Router()

// article

router.post('/article/create', ArticleController.create)

router.get('/article/:id', (ctx, next) => {
  next()
})

// tag

router.post('/tag/create', TagController.create)

router.get('/tag/list', TagController.all)

export default router