import bodyParser from 'body-parser';
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Recipe } from './models/receipe';
import { User } from './user';
import { typeDefs } from './schema.js';
import { resolvers } from './resolver';
import { ApolloServer } from 'apollo-server';

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers
// })

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const app = express();

// const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    Recipe,
    User
  })
});

// app.use('/graphql', graphiqlExpress({ endpointURL: '/graphql' }));

// app.use('graphql', graphqlExpress({
//   schema,
//   context: {
//     Recipe,
//     User
//   }
// }))

// app.listen(PORT, () => console.log(`server running on PORT : ${PORT}`));

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));