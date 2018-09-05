const Router = require('koa-router')
const products = require('../controllers/productsController')
const productsController = new products()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.status = 200
  ctx.body = {
    msg: 'Hello World'
  }
})
router.get('/products', async (ctx, next) => {
  const res = await productsController.getProduct()
  ctx.status = 200
  ctx.body = res
})
router.post('/product', async (ctx, next) => {
  const res = await productsController.createProduct(ctx.request.body)
  ctx.status = 200
  ctx.body = res
})
module.exports = router