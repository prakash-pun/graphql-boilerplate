import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import "reflect-metadata";
import { graphqlUploadExpress } from "graphql-upload";
import { startStandaloneServer } from '@apollo/server/standalone';
import express, { Express } from "express";
import cors from "cors";
import { createSchema } from "@helpers";

/**
 * Create Server.
 *
 * @returns {Express} app.
 */
const createServer = async (): Promise<Express> => {
  const app: Express = express();

  app.use(
    cors({
      origin: ["http://localhost:3002", "http://localhost:8080"],
      credentials: true,
    })
  );

  const schema = await createSchema();

 
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();


  app.use(graphqlUploadExpress());
  app.use(express.static("public"));
  // apolloServer.applyMiddleware({ app });

  return app;
};

export default createServer;
