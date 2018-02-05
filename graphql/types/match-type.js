import {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLNonNull, 
  GraphQLInt} from 'graphql';
import competitionType from './competition-type';


export default  new GraphQLObjectType({
  name: 'MatchType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    competitionId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    matchNumber: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    targetNumber: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    distanceToTarget: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    relay: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    startTime: {
      type: GraphQLString
    },
    temperature: {
      type: GraphQLInt
    },
    windClockDirection: {
      type: GraphQLInt
    },
    windSpeed: {
      type: GraphQLInt
    }, 
    lightClockDirection: {
      type: GraphQLInt
    },
    weather: {
      type: GraphQLString
    },
    competition: {
      type: competitionType
    }
  }),
});