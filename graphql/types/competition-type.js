'use strict';

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList} from 'graphql';

import matchType from './match-type';
import {matchQueries} from '../queries/match-query'

export default  new GraphQLObjectType({
  name: 'CompetitionType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    location: {
      type: new GraphQLNonNull(GraphQLString)
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
    matches: {
      type: new GraphQLList(matchType)
    }
  }),
});
