import inputMealType from '../types/input-meal-type'
import updateMealType from '../types/update-meal-type'
import r from '../r'

export default {
  type: updateMealType,
  description: 'update meal',
  args: {
    meal: {
      type: inputMealType
    }
  },
  resolve: async (source, args) => {
    return await r
          .db('taipei_steak')
          .table('meals')
          .get(args.meal.id)
          .update(args.meal, {returnChanges: true})
  }
}
