import competitionModel from '../../models/competition-model';
import competitionType from '../types/competition-type';
import matchType from '../types/match-type';
import matchMode from '../../models/match-model';
import {matchQueries} from '../queries/match-query';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

const competitionQueries = {
  getCompetition: {
    type: competitionType,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (prevValue, args, {user}) => {
      if(!user){
        throw Error('invalid user was provided');
      }
      const competition = await competitionModel.findOne({'_id': args._id, userId: user.userId});
      return competition;
    }
  },

  getAllCompetitions: {
    type: new GraphQLList(competitionType),
    resolve: async (prevValue, _ , {user}) => {
      if(!user){
        throw Error('invalid user was provided');
      }
      console.log('entered getAllCompetitions');
      const allCompetitions = await competitionModel.find({userId: user.userId});
      return allCompetitions;
    }
  }
}

export {
  competitionQueries,
};
