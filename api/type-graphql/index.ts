import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import path from "path";
import {
  buildSchemaSync,
  Field,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

import { helloWorldData } from "../data";

@ObjectType()
export class HelloWorld {
  @Field()
  hello: string;
}

@Resolver()
export class HelloWorldResolver {
  @Query(() => HelloWorld)
  helloWorld() {
    return helloWorldData;
  }
}

const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [HelloWorldResolver],
    emitSchemaFile: path.resolve(__dirname, "./schema.gql"),
  }),
  cors: true,
});

const port = parseInt(process.env.PORT || "3000", 10);

apolloServer.listen({ port }, () => {
  console.log(`🚀  TypeGraphQL API Server ready at\
 http://localhost:${port}`);
});
