import competitionType from '../types/competition-type';
import matchModel from '../../models/match-model';
import matchType from '../types/match-type';
import shotType from '../types/shot-type';
import shotModel from '../../models/shot-model';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';
import { GraphQLBoolean, GraphQLFloat } from 'graphql/type/scalars';

const shotMutations = {
  createShot: {
    type: shotType,
    args: {
      matchId: {
        type: new GraphQLNonNull(GraphQLID)
      },
      isXValue: {
        type: new GraphQLNonNull(GraphQLBoolean)
      },
      score: {
        type: new GraphQLNonNull(GraphQLString)
      },
      shotNumber: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      dateOf: {
        type: GraphQLString
      },
      elevation: {
        type: GraphQLFloat
      },
      windage: {
        type: GraphQLFloat
      },
      practice: {
        type: GraphQLBoolean
      },
      sighter: {
        type: GraphQLBoolean
      },
      record: {
        type: GraphQLBoolean
      }
    },
    resolve: async (prevValue, args, {user}) => {
    console.log('entered resolve for createShot');
    console.log('prevValue passed to createShot: ', prevValue);
    console.log('value of user in createShot: ', user);
    console.log('values of args in createShot: ', args);
    const shot = shotModel.create({
      userId: user.userId,
      matchId: args.matchId, 
      isXValue: args.isXValue,
      score: args.score,
      shotNumber: args.shotNumber,
      dateOf: args.dateOf,
      elevation: args.elevation,
      windage: args.windage,
      practice: args.practice,
      sighter: args.sighter,
      record: args.record
    });
    console.log()
    return shot;
    }
  }
};

export {
  shotMutations,
}