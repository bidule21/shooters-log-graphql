import barrelType from '../types/barrel-type';
import barrelModel from '../../models/barrel-model';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';


  const barrelQueries = {

  getBarrel: {
    type: barrelType,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered getBarrel');
        return new Promise((resolve, reject) => {
          console.log('value of args.id: ', args._id);
          barrelModel.findOne({'_id': args._id})
            .then(load => {
              console.log('results of find in barrel-query.js:  ', load);
              resolve(load);
            })
            .catch(err => reject(httpErrors(404, err.message)));
        });
    },
    }, 

  getAllBarrels: {
    type: new GraphQLList(barrelType),
    resolve: async (prevValue, _ , {}) => {
      console.log('entered getAllBarrels');
      return new Promise((resolve, reject) => {
        barrelModel.find()
        .then(barrels => {
          console.log('results in getAllBarrels: ', barrels)
          resolve(barrels);
        })
        .catch(err => reject(httpErrors(404, err.message)));
      });
    }
  }
  };

export {
  barrelQueries,
};
