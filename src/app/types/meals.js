import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} from 'graphql'

import mealType from './meal'

export default new GraphQLObjectType({
  name: 'Meals',
  description: 'Meals',
  fields: () => ({
    meals: {
      type: new GraphQLList(mealType)
    },
    count: {
      type: GraphQLInt
    },
    pages: {
      type: GraphQLInt
    }
  })
})
