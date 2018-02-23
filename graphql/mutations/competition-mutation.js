import competitionModel from '../../models/competition-model';
import rifleModel from '../../models/rifle-model';
import competitionType from '../types/competition-type';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const competitionMutations = {
  createCompetition: {
    type: competitionType,
    args: {
      location: {
        type: new GraphQLNonNull(GraphQLString)
      },
      rifleName: {
        type: GraphQLString
      },
      action: {
        type: new GraphQLNonNull(GraphQLString)
      },
      caliber: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      dateOf: {
        type: GraphQLString
      },
    },
    resolve: async (prevValue, args, {user}) => {
      console.log('entered resolve for createCompetition');
      console.log('values of args in createCompetition: ', args);
      const rifle = await rifleModel.findOne({userId: user.userId, rifleName: args.rifleName});
      console.log('rifle in competition mutation: ', rifle);
      const competition = await competitionModel.create({
        rifleId: rifle._id,
        userId: user.userId,
        rifleName: args.rifleName,
        location: args.location, 
        action: rifle.rifleAction, 
        caliber: args.caliber, 
        dateOf: args.dateOf
      });
      console.log('competition: ', competition);
      return competition;
    }
  },
  updateCompetition: {
    type: competitionType,
    args: {
      _id: {
        type: GraphQLID
      },
      location: {
        type: new GraphQLNonNull(GraphQLString)
      },
      rifleName: {
        type: GraphQLString
      },
      action: {
        type: new GraphQLNonNull(GraphQLString)
      },
      caliber: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      dateOf: {
        type: GraphQLString
      },
    },
    resolve: async (prevValue, args, {user}) => {
      console.log('entered updateCompetition');
      console.log('value of updateCompetition args: ', args);
      const rifle = await rifleModel.findOne({userId: user.userId, rifleName: args.rifleName});
      console.log('rifle in competitionUpdate: ', rifle);
      args.rifleId = rifle._id;
      args.rifleName = rifle.rifleName;
      args.action = rifle.action;
      const competition = await competitionModel.findByIdAndUpdate(args._id, args, {new:true});
      }
    }
  }

export {
  competitionMutations,
}