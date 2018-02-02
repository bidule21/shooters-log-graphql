'use strict';

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull} from 'graphql';

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
    }
  }),
});
