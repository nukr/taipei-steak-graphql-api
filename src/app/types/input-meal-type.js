import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLInt
} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'InputMeal',
  description: 'InputMeal',
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
