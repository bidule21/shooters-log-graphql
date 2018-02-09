import competitionType from '../types/competition-type';
import matchModel from '../../models/match-model';
import matchType from '../types/match-type';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const matchMutations = {
  createMatch: {
    type: matchType,
    args: {
      competitionId: {
        type: new GraphQLNonNull(GraphQLID)
      },
      matchNumber: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      targetNumber: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      distanceToTarget: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      relay: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered resolve for createMatch');
      return new Promise((resolve, reject) => {
        console.log('values of args in createMatch: ', args);
        matchModel.create({
          competitionId: args.competitionId, 
          matchNumber: args.matchNumber, 
          targetNumber: args.targetNumber, 
          distanceToTarget: args.distanceToTarget, 
          relay: args.distanceToTarget, 
          startTime: args.startTime, 
          temperature: args.temperature, 
          windClockDirection: args.windClockDirection, 
          windSpeed: args.windSpeed, 
          lightClockDirection: args.lightClockDirection, 
          weather: args.weather
        })
        .then(resolve)
        .catch(err => reject(httpErrors(404, err.message)));
      })
    }
  }
};

export {
  matchMutations,
}