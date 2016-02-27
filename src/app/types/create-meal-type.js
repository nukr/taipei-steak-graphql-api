import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql'

import changesType from './changes-type'

export default new GraphQLObjectType({
  name: 'CreateMealType',
  description: 'update result type',
  fields: () => ({
    changes: {
      type: new GraphQLList(changesType)
    },
    generated_keys: {
      type: new GraphQLList(GraphQLString)
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
