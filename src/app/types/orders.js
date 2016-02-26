import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'
import orderType from './order'

export default new GraphQLObjectType({
  name: 'Orders',
  description: 'Orders',
  fields: () => ({
    count: {
      type: GraphQLInt
    },
    orders: {
      type: new GraphQLList(orderType)
    },
    pages: {
      type: GraphQLInt,
      description: 'pages like arr.length'
    }
  })
})
