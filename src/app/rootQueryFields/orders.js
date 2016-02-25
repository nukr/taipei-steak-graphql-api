import {
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql'
import orderType from '../types/order'
import r from '../r'

export default {
  type: new GraphQLList(orderType),
  description: 'orders',
  args: {
    limit: {
      type: GraphQLInt
    },
    page: {
      type: GraphQLInt
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
    if (args.start && args.end) query = query.between(r.ISO8601(args.start), r.ISO8601(args.end), {index: 'createdAt'})
    return await query
      .skip((args.page || 0) * (args.limit || 100))
      .limit(args.limit || 100)
  }
}
