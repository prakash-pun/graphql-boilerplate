import "reflect-metadata";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import { graphqlUploadExpress } from "graphql-upload";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginInlineTraceDisabled,
} from "apollo-server-core";
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
    debug: false,
    context: ({ req }) => {
      return { req };
    },
    formatError(err) {
      return {
        message: err.message,
        code: err.originalError,
        locations: err.locations,
        path: err.path,
      };
    },
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({}),
      ApolloServerPluginInlineTraceDisabled(),
    ],
  });

  await apolloServer.start();

  app.use(graphqlUploadExpress());
  app.use(express.static("public"));
  apolloServer.applyMiddleware({ app });

  return app;
};

export default createServer;
