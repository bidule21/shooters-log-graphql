import loadModel from '../../models/load-model';
import loadType from '../types/load-type';
import httpErrors from 'http-errors';


import {
  GraphQLSchema,
  GrpahQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const loadMutations = {
  createLoad: {
    type: loadType,
    args: {
      brassBrand: {
        type: GraphQLString
      },
      brassCaliber: {
        type: GraphQLString
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
        type: GraphQLInt
      },
      bulletCaliber: {
        type: GraphQLInt
      },
      bulletWeight: {
        type: GraphQLInt
      },
      roundOAL: {
        type: GraphQLInt
      },
      primerBrand: {
        type: GraphQLString
      },
      primerName: {
        GraphQLString
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
        .then(resolve)
        .catch(err => reject(httpErrors(404, err.message)));
      })
    }
  }
};

export {
  loadMutations,
}