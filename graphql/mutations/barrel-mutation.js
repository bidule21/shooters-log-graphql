import barrelModel from '../../models/barrel-model';
import barrelType from '../types/barrel-type';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const barrelMutations = {
  createBarrel: {
    type: barrelType,
    args: {
      rifleId: {
        type: GraphQLString
      },
      barrelBrand: {
        type: GraphQLString
      },
      barrelType: {
        type: GraphQLString
      },
      barrelTwist: {
        type: GraphQLString
      },
      barrelLength: {
        type: GraphQLInt
      },
      barrelChambered: {
        type: GraphQLInt
      },
      barrelLife: {
        type: GraphQLInt
      },
      currentRoundCount: {
        type: GraphQLInt
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered resolve for createBarrel');
      return new Promise((resolve, reject) => {
        console.log('values of args in createBarrel: ', args);
        barrelModel.create({
          rifleId: args.rifleId, 
          barrelBrand: args.barrelBrand, 
          barrelType: args.barrelType, 
          barrelTwist: args.barrelTwist,
          barrelLength: args.barrelLength,
          barrelChambered: args.barrelChambered,
          barrelLife: args.barrelLife,
          currentRoundCount: args.currentRoundCount
        })
        .then(resolve)
        .catch(err => reject(httpErrors(404, err.message)));
      })
    }
  }
};

export {
  barrelMutations,
}