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
import { matchMutations } from './mutations/match-mutation';
import { matchQueries } from './queries/match-query';
import {shotQueries} from './queries/shot-query';
import {shotMutations} from './mutations/shot-mutation';
import shotModel from '../models/shot-model';

// const competitionType = require('../graphql/types/competition-type');

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...competitionQueries,
      ...matchQueries,
      ...shotQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...competitionMutations,
      ...matchMutations,
      ...shotMutations,
    }),
  })
});
