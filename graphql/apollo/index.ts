import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type HelloWorld {
    hello: String!
  }
  type Query {
    helloWorld: HelloWorld
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => {
      return {
        hello: "Hello world",
      };
    },
  },
};

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
