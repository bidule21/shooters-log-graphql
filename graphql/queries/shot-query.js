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
    resolve: (prevValue, args, {}) => {
      console.log('entered getShot');
        return new Promise((resolve, reject) => {
          console.log('value of args.id: ', args._id);
          shotModel.findOne({'_id': args._id})
            .then(shot => {
              console.log('results of find in shot-query.js:  ', shot);
              resolve(shot);
            })
            .catch(err => reject(httpErrors(404, err.message)));
        });
    },
    }, 

  getMatchShots: {
    type: new GraphQLList(shotType),
    args: {
      matchId: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: (prevValue, args , {}) => {
      console.log('entered getMatchShots');
      return new Promise((resolve, reject) => {
        shotModel.find({'matchId': args.matchId})
        .then(matchShots => {
          console.log('results in getAllMatchShots: ', matchShots)
          resolve(matchShots);
        })
        .catch(err => reject(httpErrors(404, err.message)));
      });
    }
  }
  };

export {
  shotQueries,
};
