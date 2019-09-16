import bodyParser from 'body-parser';
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Recipe } from './models/receipe';
import { User } from './models/user';
import { typeDefs } from './schema.js';
import { resolvers } from './resolver';
import { ApolloServer } from 'apollo-server';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    Recipe,
    User
  })
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));