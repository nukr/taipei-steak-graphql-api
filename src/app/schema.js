import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import mealsField from './rootQueryFields/meals'
import ordersField from './rootQueryFields/orders'

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root query',
  fields: () => ({
    meals: mealsField,
    orders: ordersField
  })
})

export default new GraphQLSchema({
  query: rootQuery
})

