import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { ExampleResolver } from "../resolvers";

/**
 * Create Schema.
 *
 * @returns {GraphQLSchema}.
 */
export const createSchema = (): Promise<GraphQLSchema> => {
  return buildSchema({
    resolvers: [ExampleResolver],
  });
};
