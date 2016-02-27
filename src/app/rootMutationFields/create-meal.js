import {
  GraphQLList
} from 'graphql'
import createMealType from '../types/create-meal-type'
import inputMealType from '../types/input-meal-type'
import r from '../r'

export default {
  type: createMealType,
  description: 'create meal type',
  args: {
    meal: {
      type: inputMealType
    },
    meals: {
      type: new GraphQLList(inputMealType)
    }
  },
  resolve: async (source, args) => {
    if (args.meal || args.meals) {
      return await r
        .db('taipei_steak')
        .table('meals')
        .insert(args.meals || args.meal, {returnChanges: true})
    } else {
      throw new Error('you must spicify meal or meals in args')
    }
  }
}
