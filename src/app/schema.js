import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import listMeal from './rootQueryFields/list-meal'
import listOrder from './rootQueryFields/list-order'
import updateMeal from './rootMutationFields/update-meal'
import createMeal from './rootMutationFields/create-meal'
import deleteMeal from './rootMutationFields/delete-meal'

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
    updateMeal,
    createMeal,
    deleteMeal
  })
})

export default new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
})

