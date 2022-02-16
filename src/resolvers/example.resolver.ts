import { ExampleSchema } from "@schemas";
import { Resolver, Query } from "type-graphql";

/**
 * Example resolver.
 */
@Resolver(() => ExampleSchema)
class ExampleResolver {
  /**
   * Example resolver.
   *
   * @returns {string}.
   */
  @Query(() => String)
  hello(): string {
    return "Hello Hello";
  }
}

export { ExampleResolver };
