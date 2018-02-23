import competitionType from '../types/competition-type';
import matchModel from '../../models/match-model';
import matchType from '../types/match-type';
import shotType from '../types/shot-type';
import shotModel from '../../models/shot-model';
import barrelModel from '../../models/barrel-model';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql';

const shotMutations = {
  createShot: {
    type: shotType,
    args: {
      matchId: {
        type: new GraphQLNonNull(GraphQLID)
      },
      barrelName: {
        type: GraphQLString
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
    const barrel = await barrelModel.findOne({barrelName: args.barrelName, userId: user.userId});
    const shot = await shotModel.create({
      userId: user.userId,
      matchId: args.matchId, 
      barrelName: barrel.barrelName,
      barrelId: barrel._id,
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
    console.log('shot: ', shot);
    return shot;
    }
  },
  updateShot: {
    type: shotType,
    args: {
      _id: {
        type: GraphQLID
      },
      matchId: {
        type: GraphQLID
      },
      barrelName: {
        type: GraphQLString
      },
      isXValue: {
        type: GraphQLBoolean

      },
      score: {
        type: GraphQLString
      },
      shotNumber: {
        type: GraphQLInt
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
    const barrel = await barrelModel.findOne({barrelName: args.barrelName, userId: user.userId});
    args.UserId = user.UserId;
    args.barrelName = barrel.barrelName;
    args.barrelId = barrel._id;
    const shot = await shotModel.findByIdAndUpdate(args._id, args, {new:true});
    return shot;
    }
  }
};

export {
  shotMutations,
}