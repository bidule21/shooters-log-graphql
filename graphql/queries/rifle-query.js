import rifleType from '../types/rifle-type';
import rifleModel from '../../models/rifle-model';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

  const rifleQueries = {

  getRifle: {
    type: rifleType,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered getRifle');
        return new Promise((resolve, reject) => {
          console.log('value of args.id: ', args._id);
          rifleModel.findOne({'_id': args._id})
            .then(rifle => {
              console.log('results of find in rifle-query.js:  ', rifle);
              resolve(rifle);
            })
            .catch(err => reject(httpErrors(404, err.message)));
        });
    },
    }, 

  getAllRifles: {
    type: new GraphQLList(rifleType),
    resolve: async (prevValue, _ , {}) => {
      console.log('entered getAllRifles');
      return new Promise((resolve, reject) => {
        rifleModel.find()
        .then(rifles => {
          console.log('results in getAllRifless: ', rifles)
          resolve(rifles);
        })
        .catch(err => reject(httpErrors(404, err.message)));
      });
    }
  }
  };

export {
  rifleQueries,
};
