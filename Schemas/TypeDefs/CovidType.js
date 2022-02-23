const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const CovidType = new GraphQLObjectType({
  name: "Covid",
  fields: () => ({
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    total: { type: GraphQLInt },
    lat: { type: GraphQLString },
    long: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});

module.exports = CovidType;