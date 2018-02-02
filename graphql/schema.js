import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import {getCompetition} from './queries/competition-query';

const competitionType = require('../graphql/types/competition-type');

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: getCompetition
  })
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: {}
  // })
  });
