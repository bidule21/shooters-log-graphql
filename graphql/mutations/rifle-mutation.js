import rifleModel from '../../models/rifle-model';
import rifleType from '../types/rifle-type';
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
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered resolve for createRifle');
      return new Promise((resolve, reject) => {
        console.log('values of args in createRifle: ', args);
        rifleModel.create({
          rifleBrand: args.rifleBrand, 
          rifleModel: args.rifleModel, 
          rifleAction: args.action, 
          rifleCategory: args.rifleCategory
        })
        .then(resolve)
        .catch(err => reject(httpErrors(404, err.message)));
      })
    }
  }
};

export {
  rifleMutations,
}