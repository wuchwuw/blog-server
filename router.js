const router = require('koa-router')()
const ArticleController = require('./controllers/article')
const TagController = require('./controllers/tag')

// const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'get index'
  next()
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

module.exports = router