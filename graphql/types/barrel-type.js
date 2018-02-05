import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt} from 'graphql';
import rifleType from './rifle-type';


export default  new GraphQLObjectType({
  name: 'barrelType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    rifleId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    barrelBrand: {
      type: GraphQLString
    },
    barrelType: {
      type: GraphQLString
    },
    barrelTwist: {
      type: GraphQLString
    },
    barrelLength: {
      type: GraphQLInt
    }, 
    barrelChambered: {
      type: GraphQLInt
    },
    barrelLife: {
      type: GraphQLString
    },
    currentRoundCount: {
      type: competitionType
    }
  }),
});