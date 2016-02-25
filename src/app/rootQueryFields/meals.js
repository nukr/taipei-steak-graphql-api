import {
  GraphQLList
} from 'graphql'
import mealType from '../types/meal'
import r from '../r'

export default {
  type: new GraphQLList(mealType),
  description: 'meals',
  resolve: async (source, args, info) => {
    return await r.db('taipei_steak').table('meals')
  }
}
