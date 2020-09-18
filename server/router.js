const KoaRouter = require('koa-router')
const router = new KoaRouter()
const controller = require('./controller')

module.exports = function registerRoutes (app) {
  // 前端上报接口
  router.get(/\/api\/report/, controller.report)
  // 页面路由
  router.get(/\/(client)?/, controller.client)

  app.use(router.routes())
  app.use(router.allowedMethods())
}