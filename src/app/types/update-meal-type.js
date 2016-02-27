import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} from 'graphql'

import changesType from './changes-type'

export default new GraphQLObjectType({
  name: 'UpdateMealType',
  description: 'update result type',
  fields: () => ({
    changes: {
      type: new GraphQLList(changesType)
    },
    deleted: {
      type: GraphQLInt
    },
    errors: {
      type: GraphQLInt
    },
    inserted: {
      type: GraphQLInt
    },
    replaced: {
      type: GraphQLInt
    },
    skipped: {
      type: GraphQLInt
    },
    unchanged: {
      type: GraphQLInt
    }
  })
})
