import { ApolloServer, gql } from "apollo-server";

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
  cors: true,
});

const port = 3001;

apolloServer.listen({ port }, () => {
  console.log(`🚀  GraphQL API Server ready at\
 http://localhost:${port}`);
});
