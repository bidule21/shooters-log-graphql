import competitionModel from '../../models/competition-model';
import competitionType from '../types/competition-type';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const competitionMutations = {
  createCompetition: {
    type: competitionType,
    args: {
      location: {
        type: new GraphQLNonNull(GraphQLString)
      },
      action: {
        type: new GraphQLNonNull(GraphQLString)
      },
      caliber: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      dateOf: {
        type: GraphQLString
      },
    },
    resolve: async (prevValue, args, {user}) => {
      console.log('entered resolve for createCompetition');
      return new Promise((resolve, reject) => {
        console.log('values of args in createCompetition: ', args);
        competitionModel.create({
          userId: user.userId,
          location: args.location, 
          action: args.action, 
          caliber: args.caliber, 
          dateOf: args.dateOf
        })
        .then(resolve)
        .catch(err => reject(httpErrors(404, err.message)));
      })
    }
  }
};

export {
  competitionMutations,
}