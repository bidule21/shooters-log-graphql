import barrelType from '../types/barrel-type';
import barrelModel from '../../models/barrel-model';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';


  const barrelQueries = {

  getBarrel: {
    type: barrelType,
    args: {
      barrelName: {
        type: GraphQLString
      }
    },
    resolve: async (prevValue, args, {user}) => {
      if(!user){
        throw Error('invalid user was provided');
      }
      const barrel = await barrelModel.findOne({'barrelName': args.barrelName, userId: user.userId});
      return barrel;
      },
    }, 

  getAllBarrels: {
    type: new GraphQLList(barrelType),
    resolve: async (prevValue, _ , {user}) => {
      if(!user){
        throw Error('invalid user was provided');
      }
      const barrels = await barrelModel.find({userId: user.userId});
      return barrels;
    }
  }
};

export {
  barrelQueries,
};
