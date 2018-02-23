import barrelType from './barrel-type';
import barrelModel from '../../models/barrel-model';


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
    },
    barrel: {
      type: barrelType,
      resolve: async (rifleType, _ , {user}) => {
        const barrel = await barrelModel.findOne({userId: user.userId, barrelName: rifleType.barrelName});
        return barrel;
      }
    }
  }),
});