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
import matchModel from '../../models/match-model';
import {getAllMatchesByCompetitionId}  from '../queries/match-query';

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
      type: new GraphQLList(matchType),
      resolve: (CompetitionType) => {
        return new Promise((resolve, reject) => {
          matchModel.find({'competitionId': CompetitionType._id})
          .then(matches => {
            console.log('results in matches resolver: ', matches);
            resolve(matches);
          })
          .catch(err => reject(httpErrors(404, err.message)));
        });
      }
    }
  }),
});
