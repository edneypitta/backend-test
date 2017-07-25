const Koa = require('koa')

const db = require('./db')
db.init()

const router = require('./router')()
const app = new Koa()
app.use(router.routes())
app.listen(3000)