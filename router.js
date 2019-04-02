const router = require('koa-router')()

// const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'get index'
  next()
})

router.get('/topic', (ctx, next) => {
  ctx.body = 'get topic11333333333'
  next()
})

module.exports = router