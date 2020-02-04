import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { express as voyagerMiddleware } from "graphql-voyager/middleware";
import path from "path";
import { buildSchemaSync } from "type-graphql";

import * as resolvers from "./resolvers";

const app = express();

app.use(cors());

app.use("/voyager", voyagerMiddleware({ endpointUrl: "/graphql" }));

const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [...(Object.values(resolvers) as Function[])],
    emitSchemaFile: path.resolve(__dirname, "./schema.gql"),
  }),
  introspection: true,
});

const port = 3003;

apolloServer.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`🚀  TypeGraphQL API Server ready at\
 http://localhost:${port}`);
});
