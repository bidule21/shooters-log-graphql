
import userModel from '../../models/user-model';
import userType from '../types/user-type';
import bcrypt from 'bcrypt';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const signUpMutations = {
  createUser: {
    type: userType,
    args: {
      userName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      password: {
        type: new GraphQLNonNull(GraphQLString)
      },
      nraNumber: {
        type: GraphQLInt
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
      nameSuffx: {
        type:  GraphQLString
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered resolve for createUser');
      args.password = await bcrypt.hash(args.password, 12);
      console.log('password: ', args.password);
      return userModel.create({
          userName: args.userName, 
          findHash: args.password, 
          nraNumber: args.nraNumber, 
          nraQualification: args.nraQualification, 
          firstName: args.firstName, 
          lastName: args.lastName, 
          nameSuffix: args.nameSuffix, 
        });
      }
    }
  }

export {
  signUpMutations,
}