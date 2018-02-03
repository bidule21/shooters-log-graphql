'use strict';

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt} = require('graphql');

export default new GraphQLObjectType({
  name: 'shot',
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
      type: StriGraphQLStringng
    },
    shotNumber: {
      type: GraphQLInt
    },
    // polarCoords: {type: Array},
    // cartesianCoords: {type: Array},
    elevation: {
      type: GraphQLInt
    },
    windage: {
      type: GraphQLInt
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