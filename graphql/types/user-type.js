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
    // competitions: {
    //   type: new GraphQLList(competitionType),
    //   resolve: async (user) => {
    //     const competitions = await competitionModel.find({'userId': user._id})
    //     return competitions;
    //     }
    // },
    // rifles: {
    //   type: new GraphQLList(rifleType),
    //   resolve: async (user) => {
    //       const rifles = await rifleModel.find({'userId': user._id});
    //       return rifles;
    //   }
    // },
    // loads: {
    //   type: new GraphQLList(loadType),
    //   resolve: async (user) => {
    //   const loads = await loadModel.find({'userId': user._id})
    //   return loads
    //   }
    // },
  }),
});