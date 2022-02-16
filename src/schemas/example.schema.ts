import { Field, ID } from "type-graphql";

/**
 * Example schema.
 */
export class ExampleSchema {
  @Field(() => ID)
  id?: string;

  @Field()
  name: string;
}
