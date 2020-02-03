import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import express from "express";
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

const app = express();

const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [HelloWorldResolver],
  }),
});

apolloServer.applyMiddleware({
  app,
});

const port = parseInt(process.env.PORT || "3000", 10);

app.listen({ port }, () => {
  console.log(`🚀  TypeGraphQL API Server ready at http://localhost:${port}`);
});
