const registerRoutes = require('./router')

module.exports = function registerMiddleware (app) {
  registerRoutes(app)
}