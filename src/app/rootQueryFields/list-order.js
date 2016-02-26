import {
  GraphQLInt,
  GraphQLString
} from 'graphql'
import ordersType from '../types/orders'
import r from '../r'

export default {
  type: ordersType,
  description: 'orders',
  args: {
    limit: {
      type: GraphQLInt
    },
    page: {
      type: GraphQLInt,
      description: 'zero index'
    },
    start: {
      type: GraphQLString
    },
    end: {
      type: GraphQLString
    }
  },
  resolve: async (source, args, info) => {
    let query = r.db('taipei_steak').table('orders')
    let limit = args.limit || 100

    let page = args.page || 0
    if (args.start && args.end) query = query.between(r.ISO8601(args.start), r.ISO8601(args.end), {index: 'createdAt'})
    let count = await query.count()
    let data = await query
          .skip(page * limit)
          .limit(limit)

    let pages = Math.ceil(count / limit)
    if (page >= pages) throw new Error('page out of range')

    return { count, data, pages }
  }
}
