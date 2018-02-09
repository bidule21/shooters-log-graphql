
import loadType from '../types/load-type';
import loadModel from '../../models/load-model';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GrpahQLFloat
} from 'graphql';
import { GraphQLFloat } from 'graphql/type/scalars';

const loadMutations = {
  createLoad: {
    type: loadType,
    args: {
      brassBrand: {
        type: GraphQLString
      },
      brassCaliber: {
        type: GraphQLInt
      },
      powderBrand: {
        type: GraphQLString
      },
      powderName: {
        type: GraphQLString
      },
      powderWeight: {
        type: GraphQLFloat
      },
      bulletBrand: {
        type: GraphQLString
      },
      bulletCaliber: {
        type: GraphQLInt
      },
      bulletWeight: {
        type: GraphQLFloat
      },
      roundOAL: {
        type: GraphQLFloat
      },
      primerBrand: {
        type: GraphQLString
      },
      primerName: {
        type: GraphQLString
      },
      muzzleVelocity: {
        type: GraphQLInt
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered resolve for createload');
      return new Promise((resolve, reject) => {
        console.log('values of args in createLoad: ', args);
        loadModel.create({
          brassBrand: args.brassBrand, 
          brassCaliber: args.brassCaliber, 
          powderBrand: args.powderBrand, 
          powderName: args.powderName, 
          powderWeight: args.powderWeight, 
          bulletBrand: args.bulletBrand, 
          bulletCaliber: args.bulletCaliber, 
          bulletWeight: args.bulletWeight, 
          roundOAL: args.roundOAL, 
          primerBrand: args.primerBrand, 
          primerName: args.primerName,
          muzzleVelocity: args.muzzleVelocity
        })
        .then(load => {
          console.log('return value of createLoad: ', load);
          resolve(load);
        })
        .catch(err => reject(httpErrors(404, err.message)));
      })
    }
  }
};

export {
  loadMutations,
}