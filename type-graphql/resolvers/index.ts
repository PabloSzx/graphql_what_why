import { Query, Resolver } from "type-graphql";

import { HelloWorld } from "../entities";

@Resolver()
export class HelloWorldResolver {
  @Query(() => HelloWorld)
  helloWorld() {
    return {
      hello: "Hello World",
    };
  }
}
