import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

import { helloWorldData } from "../data";

const typeDefs = gql`
  type HelloWorld {
    hello: String!
  }
  type Query {
    helloWorld: HelloWorld!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => {
      return helloWorldData;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

apolloServer.applyMiddleware({
  app,
});

const port = parseInt(process.env.PORT || "3000", 10);

app.listen({ port }, () => {
  console.log(`🚀  GraphQL API Server ready at http://localhost:${port}`);
});
