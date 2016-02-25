import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt
} from 'graphql'
import rethinkdbdash from 'rethinkdbdash'
import MealType from './types/meal'
import OrderType from './types/order'

const r = rethinkdbdash({host: '192.168.99.100'})

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root query',
  fields: () => ({
    meals: {
      type: new GraphQLList(MealType),
      description: 'meals',
      resolve: async (source, args, info) => {
        return await r.db('taipei_steak').table('meals')
      }
    },
    orders: {
      type: new GraphQLList(OrderType),
      description: 'orders',
      args: {
        limit: {
          type: GraphQLInt
        },
        page: {
          type: GraphQLInt
        }
      },
      resolve: async (source, args, info) => {
        return await r
          .db('taipei_steak')
          .table('orders')
          .skip((args.page || 0) * (args.limit || 100))
          .limit(args.limit || 100)
      }
    }
  })
})

export default new GraphQLSchema({
  query: rootQuery
})

