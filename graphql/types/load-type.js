import {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLNonNull, 
  GraphQLInt, 
  GraphQLFloat} from 'graphql';


export default  new GraphQLObjectType({
  name: 'loadType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
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
    bulletCaliber: {
      type: GraphQLInt
    },
    bulletWeight: {
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
  })
});