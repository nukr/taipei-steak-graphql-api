import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import listMeal from './rootQueryFields/list-meal'
import listOrder from './rootQueryFields/list-order'

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root query',
  fields: () => ({
    listMeal, listOrder
  })
})

const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root mutation',
  fields: () => ({
  })
})

export default new GraphQLSchema({
  query: rootQuery
  // mutation: rootMutation
})

