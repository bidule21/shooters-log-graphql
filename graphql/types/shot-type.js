import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLFloat, GraphQLNonNull} from 'graphql';

export default new GraphQLObjectType({
  name: 'ShotType',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    //you may have to include a match object with specific _id field to make //this work
    matchId: {
      type: GraphQLID
    },
    xValue: {
      type: GraphQLBoolean
    },
    score: {
      type: GraphQLString
    },
    dateOf: {
      type: GraphQLString
    },
    shotNumber: {
      type: GraphQLInt
    },
    // polarCoords: {type: Array},
    // cartesianCoords: {type: Array},
    elevation: {
      type: GraphQLFloat
    },
    windage: {
      type: GraphQLFloat
    },
    practice: {
      type: GraphQLBoolean
    },
    sighter: {
      type: GraphQLBoolean
    },
    record: {
      type: GraphQLBoolean
    }
   
  }
});