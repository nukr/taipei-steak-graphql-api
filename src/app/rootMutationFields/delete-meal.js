import {
  GraphQLString,
  GraphQLList
} from 'graphql'
import updateMealType from '../types/update-meal-type'
import r from '../r'

export default {
  type: updateMealType,
  args: {
    id: {
      type: GraphQLString
    },
    ids: {
      type: new GraphQLList(GraphQLString)
    }
  },
  resolve: async (source, args) => {
    console.log(args)
    let query = r.db('taipei_steak').table('meals')
    if (args.ids) {
      query = query.getAll(r.args(args.ids))
    } else if (args.id) {
      query = query.get(args.id)
    }
    return await query.delete({returnChanges: true})
  }
}
