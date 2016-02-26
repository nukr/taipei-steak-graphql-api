import { graphql } from 'graphql'
import Koa from 'koa'
import Router from 'koa-router'
import graphiql from 'koa-graphiql'
import logger from 'koa-logger'
import bodyParser from 'co-body'
import schema from './schema'

const app = new Koa()
const router = new Router()
const PORT = process.env.PORT || 3000

router.get('/', async (ctx) => {
  ctx.status = 200
})

router.post('/graphql', async (ctx) => {
  const payload = await bodyParser(ctx.req)
  const { query, variables } = payload
  const rootValue = {
    aa: 11
  }
  ctx.body = await graphql(schema, query, rootValue, variables)
})

router.get('/graphiql', graphiql(async (ctx) => {
  return { url: '/graphql' }
}))

app.use(logger())
app.use(router.routes())
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
