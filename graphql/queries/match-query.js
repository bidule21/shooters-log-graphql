import competitionModel from '../../models/competition-model';
import competitionType from '../types/competition-type';
import matchModel from '../../models/match-model';
import matchType from '../types/match-type';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';


  const matchQueries = {

  getMatch: {
    type: matchType,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: (prevValue, args, {}) => {
      console.log('entered getMatch');
        return new Promise((resolve, reject) => {
          console.log('value of args.id: ', args._id);
          matchModel.findOne({'_id': args._id})
            .then(match => {
              console.log('results of find in match-query.js:  ', match);
              resolve(match);
            })
            .catch(err => reject(httpErrors(404, err.message)));
        });
    },
    }, 

    getAllMatchesByCompetitionId: {
      type: new GraphQLList(matchType),
      args: {
        competitionId: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (prevValue, args, {}) => {
        console.log('entered getAllMatchesByCompetitionId');
        return new Promise((resolve, reject) => {
          matchModel.find({'competitionId': args.competitionId})
          .then(matches => {
            console.log('results in getAllMatchesByCompetitionId: ', matches)
            resolve(matches);
          })
          .catch(err => reject(httpErrors(404, err.message)));
        });
      }
    },

  getAllMatches: {
    type: new GraphQLList(matchType),
    resolve: (prevValue, _ , {}) => {
      console.log('entered getAllMatchs');
      return new Promise((resolve, reject) => {
        matchModel.find()
        .then(matches => {
          console.log('results in getAllMatchs: ', matches)
          resolve(matches);
        })
        .catch(err => reject(httpErrors(404, err.message)));
      });
    }
  }
  };

export {
  matchQueries,
};
