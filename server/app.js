const Koa = require('Koa')
const app = new Koa()
const registerMiddleware = require('./middleware')
const PORT = 4000

registerMiddleware(app)

app.listen(PORT, () => {
  console.log(`server start at http://localhost:${PORT}/`)
})