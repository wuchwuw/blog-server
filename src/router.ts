import Router from 'koa-router'
import ArticleController from './controllers/article'
import TagController from './controllers/tag'

const router = new Router()

// article

router.post('/article/create', ArticleController.create)
router.get('/article/:id', ArticleController.getArticleById)
router.get('/article/list', ArticleController.getArticles)

// tag

router.post('/tag/create', TagController.create)
router.get('/tag/list', TagController.getAllTag)

export default router
