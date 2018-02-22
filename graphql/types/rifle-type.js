
import {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLNonNull, 
  GraphQLInt, 
  GraphQLFloat} from 'graphql';



export default  new GraphQLObjectType({
  name: 'rifleType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    rifleName: {
      type: GraphQLString
    },
    rifleBrand: {
      type: GraphQLString
    },
    rifleModel: {
      type: GraphQLString
    },
    rifleAction: {
      type: GraphQLString
    },
    rifleCategory: {
      type: GraphQLString
    },
    barrelName: {
      type: GraphQLString
    }
  }),
});