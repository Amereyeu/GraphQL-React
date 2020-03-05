const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//cors requests
app.use(cors());

//connection to mongodb
mongoose.connect(
	//your db info
);

mongoose.connection.once("open", () => {
	console.log("connected to db");
});

//setup for graphiql
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(4000, () => {
	console.log("listening to port 4K");
});
