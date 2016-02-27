import {
  GraphQLObjectType
} from 'graphql'
import mealType from './meal'

export default new GraphQLObjectType({
  name: 'ChangesType',
  fields: () => ({
    new_val: {
      type: mealType
    },
    old_val: {
      type: mealType
    }
  })
})
