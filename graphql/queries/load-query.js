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
      loadName: {
        type: GraphQLString
      }
    },
    resolve: async (prevValue, args, {user}) => {
      console.log('entered getLoad');
      console.log('value of args.id: ', args._id);
      const load = await loadModel.findOne({'loadName': args.loadName, userId: user.userId});
      console.log('load: ', load);
      return load;
      }
    },

  getAllLoads: {
    type: new GraphQLList(loadType),
    resolve: async (prevValue, _ , {user}) => {
      console.log('entered getAllLoads')
      const loads = await loadModel.find({userId: user.userId});
      console.log('loads: ', loads);
      return loads;
    }
  }
}

export {
  loadQueries,
};
