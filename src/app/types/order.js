import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList
} from 'graphql'

import moment from 'moment'

const ItemType = new GraphQLObjectType({
  name: 'Item',
  description: 'item',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'name'
    },
    price: {
      type: GraphQLInt,
      description: 'price'
    },
    quantity: {
      type: GraphQLInt,
      description: 'quantity'
    }
  })
})

export default new GraphQLObjectType({
  name: 'Order',
  description: 'Order',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'id'
    },
    items: {
      type: new GraphQLList(ItemType),
      description: 'items'
    },
    credit: {
      type: GraphQLBoolean,
      description: 'credit'
    },
    discount: {
      type: GraphQLFloat,
      description: 'discount'
    },
    serviceTip: {
      type: GraphQLFloat,
      description: 'service tip'
    },
    createdAt: {
      type: GraphQLString,
      description: 'created at',
      args: {
        humanreadable: {
          type: GraphQLBoolean
        }
      },
      resolve: (source, args, info) => {
        return args.humanreadable
          ? moment(source.createdAt).format()
          : source.createdAt
      }
    },
    updatedAt: {
      type: GraphQLString,
      description: 'updated at',
      args: {
        humanreadable: {
          type: GraphQLBoolean
        }
      },
      resolve: (source, args, info) => {
        return args.humanreadable
          ? moment(source.updatedAt).format()
          : source.updatedAt
      }
    },
    total: {
      type: GraphQLFloat,
      description: 'total',
      resolve: (source, args, info) => {
        let total = source.items.reduce((acc, item) => {
          acc += item.price * item.quantity
          return acc
        }, 0)
        let discountAmount = total * source.discount
        let serviceTipAmount = total * 0.1

        return total - discountAmount + serviceTipAmount
      }
    }
  })
})
