import barrelModel from '../../models/barrel-model';
import barrelType from '../types/barrel-type';
import rifleModel from '../../models/rifle-model';
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
      barrelName: {
        type: GraphQLString
      },
      rifleName: {
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
    resolve: async (prevValue, args, {user}) => {
      console.log('entered resolve for createBarrel');
      console.log('values of args in createBarrel: ', args);
      console.log('value of userId: ', user.userId);
      const rifle =  await rifleModel.findOne({userId: user.userId, rifleName: args.rifleName });
      console.log('rifle returned in createBarrel: ', rifle);
      const barrel = await barrelModel.create({
        rifleId: rifle._id,
        userId: user.userId,
        barrelName: args.barrelName,
        rifleName: args.rifleName, 
        barrelBrand: args.barrelBrand, 
        barrelType: args.barrelType, 
        barrelTwist: args.barrelTwist,
        barrelLength: args.barrelLength,
        barrelChambered: args.barrelChambered,
        barrelLife: args.barrelLife,
        currentRoundCount: args.currentRoundCount
      });
      console.log('returned barrel in createBarrel:\n ', barrel);
      return barrel;
    }
  },
  updateBarrel: {
    type: barrelType,
    args: {
      _id: {
        type: GraphQLID
      },
      barrelName: {
        type: GraphQLString
      },
      rifleName: {
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
    resolve: async (prevValue, args, {user}) => {
      console.log('entered resolve for updateBarrel');
      console.log('values of args in updateBarrel: ', args);
      console.log('value of userId: ', user.userId);
      const rifle =  await rifleModel.findOne({userId: user.userId, rifleName: args.rifleName });
      console.log('rifle returned in updateBarrel: ', rifle);
      const barrel = await barrelModel.findByIdAndUpdate(args._id, args, {new:true});
      console.log('returned barrel in createBarrel:\n ', barrel);
      return barrel;
    }
  }
};

export {
  barrelMutations,
}