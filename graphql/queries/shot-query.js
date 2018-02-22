import matchType from '../types/match-type';
import shotType from '../types/shot-type';
import shotModel from '../../models/shot-model';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean
} from 'graphql';


  const shotQueries = {

  getshot: {
    type: shotType,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (prevValue, args, {user}) => {
      console.log('entered getShot');
      console.log('value of args.id: ', args._id);
      const shot = await shotModel.findOne({'_id': args._id, userId: user.userId});
      return shot;
      }
    }, 

  getMatchShots: {
    type: new GraphQLList(shotType),
    args: {
      matchId: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (prevValue, args , {user}) => {
      console.log('entered getMatchShots');
      const shots = await shotModel.find({'matchId': args.matchId, userId: user.userId});
      return shots;
      }
    },
 

  getBarrelShots: {
    type: new GraphQLList(shotType),
    args: {
      barrelName: {
        type: GraphQLString
      }
    },
    resolve: async (prevValue, args, {user}) => {
      const shots = await shotModel.find({barrelName: args.barrelName, userId: user.userId});
      return shots;
    }
  }

};


export {
  shotQueries,
};
