const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const covidData = require("../_data/death.json");

const CovidType = require("./TypeDefs/CovidType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllCovid: {
      type: new GraphQLList(CovidType),
      args: { 
        country : { type: GraphQLString } 
        },
      resolve(parent, args) {
        return covidData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: CovidType,
      args: {
        country: { type: GraphQLString },
        state: { type: GraphQLString },
        total: { type: GraphQLInt },
        lat: { type: GraphQLString },
        long: { type: GraphQLString },
        date: { type: GraphQLString },
      },
      resolve(parent, args) {
        covidData.push({
            country: args.country,
            state: args.state,
            total: args.total,
            lat: args.lat,
            long: args.long,
            date: args.date,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });