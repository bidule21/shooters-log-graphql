import competitionModel from '../../models/competition-model';
import competitionType from '../types/competition-type';

import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';



const getCompetition = {
  competition: {
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
    }
  }


export {
  getCompetition
};
