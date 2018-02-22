import rifleType from '../types/rifle-type';
import rifleModel from '../../models/rifle-model';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

  const rifleQueries = {

  getRifle: {
    type: rifleType,
    args: {
      rifleName: {
        type: GraphQLString
      }
    },
    resolve: async (prevValue, args, {user}) => {
      console.log('entered getRifle');
      console.log('value of args.id: ', args.rifleName);
      const rifle = await rifleModel.findOne({'rifleName': args.rifleName, userId: user.userId});
      return rifle;
    },
    }, 

  getAllRifles: {
    type: new GraphQLList(rifleType),
    resolve: async (prevValue, _ , {user}) => {
      console.log('entered getAllRifles');
        const rifles = await rifleModel.find({userId: user.userId});
        return rifles;
      }
    }
  };

export {
  rifleQueries,
};
