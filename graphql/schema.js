import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import {competitionQueries} from './queries/competition-query';
import {competitionMutations} from './mutations/competition-mutation';
import competitionType from '../graphql/types/competition-type';

// const competitionType = require('../graphql/types/competition-type');

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...competitionQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...competitionMutations,
    }),
  })
});
