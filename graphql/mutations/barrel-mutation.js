import barrelModel from '../../models/barrel-model';
import barrelType from '../types/barrel-type';
import rifleModel from '../../models/rifle-model';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GraphQLObjectType,
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
      const barrel = await barrelModel.create({
        userId: user.userId,
        barrelName: args.barrelName,
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
      const barrel = await barrelModel.findByIdAndUpdate(args._id, args, {new:true});
      console.log('returned barrel in createBarrel:\n ', barrel);
      return barrel;
    }
  },
  deleteBarrel: {
    type: barrelType,
    args: {
      _id: {
        type: GraphQLID
      }
    },
    resolve: async (prevValue, args, {user}) => {
      console.log('entered resolve for updateBarrel');
      let barrel = await barrelModel.findOne({_id: args._id, userId: user.userId});
      if(user.userId != barrel.userId){
        throw new Error('cannot delete barrel, due to invalid user id');
      }
      barrel = await barrelModel.findByIdAndRemove(args._id);
      console.log('returned barrel in removeBarrel:\n ', barrel);
      return barrel;
    

    }
  }
};

export {
  barrelMutations,
}