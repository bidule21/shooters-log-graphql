'use strict';

import {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLNonNull, 
  GraphQLInt,
  GraphQLList} from 'graphql';
import CompetitionType from './competition-type';
import httpErrors from 'http-errors';
import ShotType from './shot-type';
import shotModel from '../../models/shot-model';
import shotQueries from '../queries/shot-query';
import MatchType from './match-type';
import LoadType from './load-type';
import RifleType from './rifle-type';
import jwt from 'jsonwebtoken';
const SECRET = process.env.SECRET_KEY;

export default  new GraphQLObjectType({
  name: 'UserType',
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
    token: {
      type: GraphQLString,
      resolve: async (prevValue, {userName, _id}, {}) => {
            const token = await jwt.sign(
              {userName: userName, userId: _id},
               SECRET,
              {expiresIn: '180d'});
            console.log('token in token:  ', token);
            return token;
          }
    }

    // competitions: {
    //   type: new GraphQLList(CompetitionType),
    //   resolve: async (user) => {
    //     const competitions = await competitionModel.find({'userId': user._id})
    //     return competitions;
    //     }
    // },
    // rifles: {
    //   type: new GraphQLList(RifleType),
    //   resolve: async (user) => {
    //       const rifles = await rifleModel.find({'userId': user._id});
    //       return rifles;
    //   }
    // },
    // loads: {
    //   type: new GraphQLList(LoadType),
    //   resolve: async (user) => {
    //   const loads = await loadModel.find({'userId': user._id})
    //   return loads
    //   }
    // },
  }),
});