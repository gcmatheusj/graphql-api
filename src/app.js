import {} from 'dotenv/config';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import typeDefs from './app/graphql/schemas/typeDefs';
import resolvers from './app/graphql/resolvers/Tool';
import databaseConfig from './config/database';

class App {
  constructor() {
    this.express = express();

    this.database();
    this.server();
  }

  // eslint-disable-next-line class-methods-use-this
  database() {
    mongoose.connect(databaseConfig.uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
  }

  server() {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    server.applyMiddleware({ app: this.express });
  }
}

export default new App().express;
