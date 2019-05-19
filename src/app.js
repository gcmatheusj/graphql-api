import {} from "dotenv/config";

import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import typeDefs from "./app/graphql/schemas";
import resolvers from "./app/graphql/resolvers";
import databaseConfig from "./config/database";
import getUser from "./app/utils/auth/GetUser";

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
      resolvers,
      context: ({ req }) => {
        const token = req.headers.authorization || "";

        const user = getUser(token);

        return { user };
      }
    });

    server.applyMiddleware({ app: this.express });
  }
}

export default new App().express;
