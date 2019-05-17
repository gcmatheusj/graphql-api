import {} from "dotenv/config";

import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./app/graphql/schemas/typeDefs";
import { resolvers } from "./app/graphql/resolvers/user";
import express from "express";
import mongoose from "mongoose";
import databaseConfig from "./config/database";

class App {
  constructor() {
    this.express = express();

    this.database();
    this.server();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
  }

  server() {
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    server.applyMiddleware({ app: this.express });
  }
}

export default new App().express;
