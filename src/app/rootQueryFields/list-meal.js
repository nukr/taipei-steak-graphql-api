import {
  GraphQLInt
} from 'graphql'
import mealsType from '../types/meals'
import r from '../r'

export default {
  type: mealsType,
  description: 'meals',
  args: {
    limit: {
      type: GraphQLInt
    },
    page: {
      type: GraphQLInt
    }
  },
  resolve: async (source, args, info) => {
    let limit = args.limit || 100
    let page = args.page || 0

    let query = r.db('taipei_steak').table('meals')
    let count = await query.count()
    query = query.skip(page * limit).limit(limit)
    let meals = await query

    let pages = Math.ceil(count / limit)
    if (page >= pages) throw new Error('page out of range')

    return {
      count,
      meals,
      pages
    }
  }
}
