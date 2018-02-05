import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLFloat} from 'graphql';
import loadType from './load-type';


export default  new GraphQLObjectType({
  name: 'loadType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
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
    bulletWeight: {
      type: GraphQLInt
    },
    bulletCaliber: {
      type: GraphQLInt
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
  }),
});