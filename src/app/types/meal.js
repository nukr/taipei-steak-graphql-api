import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Meal',
  description: 'Meal',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    price: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    remark: { type: GraphQLString }
  })
})
