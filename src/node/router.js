const Router = require('koa-router')
const koaBody = require('koa-body')()
const db = require('./db')

const response = (statusCode, ctx, next) => {
  ctx.status = statusCode
  return next()
}

module.exports = () => {
  const router = new Router({ prefix: '/venue(s|)' })

  router
    .get('/', async (ctx, next) => {
      const venues = await db.getAllVenues()
      ctx.body = venues.map(x => {
        return { id: x.id, name: x.name, items: x.items.map(i => i.name) }
      })
      return response(200, ctx, next)
    })
    .get('/:id', async (ctx, next) => {
      const venue = await db.getVenue(ctx.params.id)
      if (!venue)
        return response(404, ctx, next)

      ctx.body = venue.toJson(['id', 'name', 'items'])
      return response(200, ctx, next)
    })
    .post('/', koaBody, async (ctx, next) => {
      const venue = new Venue(ctx.request.body)
      const validationResult = await venue.validate()
      if (!validationResult)
        return response(400, ctx, next)

      venue.save()
      return response(200, ctx, next)
    })
    .put('/:id', koaBody, async (ctx, next) => {
      const venue = await db.getVenue(ctx.params.id)
      if (!venue)
        return response(404, ctx, next)

      venue.name = ctx.request.body.name
      venue.save()
      return response(200, ctx, next)
    })
    .del('/:id', koaBody, async (ctx, next) => {
      const venue = await db.getVenue(ctx.params.id)
      if (!venue)
        return response(404, ctx, next)

      venue.destroy()
      return response(200, ctx, next)
    })

  return router
}