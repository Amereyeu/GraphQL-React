const graphql = require("graphql");
const _ = require("lodash");

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} = graphql;

//GraphQL stuff goes here

module.exports = new GraphQLSchema({
	query: RootQuery
});
