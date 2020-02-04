import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import path from "path";
import { buildSchemaSync } from "type-graphql";

import * as resolvers from "./resolvers";

const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [...(Object.values(resolvers) as Function[])],
    emitSchemaFile: path.resolve(__dirname, "./schema.gql"),
  }),
  cors: true,
});

const port = 3003;

apolloServer.listen({ port }, () => {
  console.log(`🚀  TypeGraphQL API Server ready at\
 http://localhost:${port}`);
});
