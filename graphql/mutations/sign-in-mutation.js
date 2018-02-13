
import userModel from '../../models/user-model';
import userType from '../types/user-type';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const signInMutations = {
  signInUser: {
    type: userType,
    args: {
      userName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      password: {
        type: new GraphQLNonNull(GraphQLString)
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
  signInMutations,
}