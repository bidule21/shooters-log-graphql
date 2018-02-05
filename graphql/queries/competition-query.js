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



// const getCompetition = {
  const competitionQueries = {

  getCompetition: {
    type: competitionType,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered getCompetition');
        return new Promise((resolve, reject) => {
          console.log('value of args.id: ', args._id);
          competitionModel.findOne({'_id': args._id})
            .then(competition => {
              console.log('results of find in competition-query.js:  ', competition);
              resolve(competition);
            })
            .catch(err => reject(httpErrors(404, err.message)));
        });
    },
    }, 

  getAllCompetitions: {
    type: new GraphQLList(competitionType),
    resolve: async (prevValue, _ , {}) => {
      console.log('entered getAllCompetitions');
      return new Promise((resolve, reject) => {
        competitionModel.find()
        .then(competitions => {
          console.log('results in getAllCompetions: ', competitions)
          resolve(competitions);
        })
        .catch(err => reject(httpErrors(404, err.message)));
      });
    }
  }
  };

export {
  competitionQueries,
};
