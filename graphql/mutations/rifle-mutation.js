import rifleModel from '../../models/rifle-model';
import rifleType from '../types/rifle-type';
import barrelModel from '../../models/barrel-model';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const rifleMutations = {
  createRifle: {
    type: rifleType,
    args: {
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
    },
    resolve: async (prevValue, args, {user}) => {
      console.log('entered resolve for createRifle');
      console.log('values of args in createRifle: ', args);
      const barrelId = await barrelModel.findOne({userId: user.userId, barrelName: args.barrelName});
      const rifle = await rifleModel.create({
        UserId: user.userId,
        rifleName: args.rifleName,
        rifleBrand: args.rifleBrand, 
        rifleModel: args.rifleModel, 
        rifleAction: args.rifleAction, 
        rifleCategory: args.rifleCategory,
        barrelName: args.barrelName,
        barrelId: barrelId,
        userId: user.userId,
      });
      console.log('newly created rifle: ', rifle);
      return rifle;
    }
  }
};

export {
  rifleMutations,
}