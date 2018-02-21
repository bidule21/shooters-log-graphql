import {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLNonNull, 
  GraphQLInt,
  GraphQLList} from 'graphql';
import competitionType from './competition-type';
import httpErrors from 'http-errors';
import ShotType from './shot-type';
import shotModel from '../../models/shot-model';
import shotQueries from '../queries/shot-query';
import matchType from './match-type';
import loadType from './load-type';
import rifleType from './rifle-type';

export default  new GraphQLObjectType({
  name: 'userType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    userName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    nraNumber: {
      type: GraphQLString
    },
    nraQualification: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    nameSuffix: {
      type: GraphQLString
    },
    competitions: {
      type: new GraphQLList(competitionType),
      resolve: (user) => {
        return new Promise((resolve, reject)=> {
          competitionModel.find({'userId': user._id})
          then(competitions => {
            console.log('results in user-type competitions resolver: \n', competitions);
            resolve(competitions);
          })
          .catch(err => reject(httpErrors(404, err.message)));
        });
      }
    },
    rifles: {
      type: new GraphQLList(rifleType),
      resolve: (user) => {
        return new Promise((resolve, reject) => {
          rifleModel.find({'userId': user._id})
          .then(rifles => {
            console.log('results in shots resolver: \n', rifles);
            resolve(rifles);
          })
          .catch(err => reject(httpErrors(404, err.message)));
        });
      }
    },
    loads: {
      type: new GraphQLList(loadType),
      resolve: (user) => {
        return new Promise((resolve, reject) => {
          loadModel.find({'userId': user._id})
          .then(loads => {
            console.log('results in shots resolver: \n', loads);
            resolve(loads);
          })
          .catch(err => reject(httpErrors(404, err.message)));
        });
      }
    },
  }),
});