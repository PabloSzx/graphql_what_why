import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import { buildSchemaSync } from "type-graphql";

import * as resolvers from "../resolvers";

export const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: Object.values(resolvers),
  }),
});
