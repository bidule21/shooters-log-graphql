import loadType from '../types/load-type';
import loadModel from '../../models/load-model';
import rifleType from '../types/rifle-type';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';


  const loadQueries = {

  getLoad: {
    type: loadType,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered getLoad');
        return new Promise((resolve, reject) => {
          console.log('value of args.id: ', args._id);
          loadModel.findOne({'_id': args._id})
            .then(load => {
              console.log('results of find in load-query.js:  ', load);
              resolve(load);
            })
            .catch(err => reject(httpErrors(404, err.message)));
        });
    }
  },

  getAllLoads: {
    type: new GraphQLList(loadType),
    resolve: async (prevValue, _ , {}) => {
      console.log('entered getAllLoads');
      return new Promise((resolve, reject) => {
        loadModel.find()
        .then(loads => {
          console.log('results in getAllLoads: ', loads)
          resolve(loads);
        })
        .catch(err => reject(httpErrors(404, err.message)));
      });
    }
  }
  };

export {
  loadQueries,
};
