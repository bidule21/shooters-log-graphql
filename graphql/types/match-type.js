'use strict';

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} = require('graphql');

export default new GraphQLObjectType({
  name: 'match',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    competitionId: {
      type: GraphQLID
    },
    weather: {
      type:GraphQLString
    }
  }
});