import {
  GraphQLList
} from 'graphql'
import mealsType from '../types/meals'
import r from '../r'

export default {
  type: mealsType,
  description: 'meals',
  resolve: async (source, args, info) => {
    let query = r.db('taipei_steak').table('meals')
    let count = await query.count()
    let meals = await query

    return {
      count,
      meals
    }
  }
}
