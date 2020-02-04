import { ApolloServer, gql } from "apollo-server";
import { sample } from "lodash";

import { CharactersData, PlanetsData, SpeciesData } from "../data";

const typeDefs = gql`
  type Query {
    hero: Character
  }

  type Character {
    name: String!
    friends: [Character!]!
    homeWorld: Planet
    species: Species!
  }

  type Planet {
    name: String!
    climate: String!
    neighbors: [Planet!]!
  }

  type Species {
    name: String!
    lifespan: Int!
    origin: Planet!
  }
`;

const resolvers = {
  Character: {
    homeWorld: ({ name }: { name: string }) => {
      const homeWorldName = CharactersData.find(value => value.name === name)
        ?.homeWorld;
      if (homeWorldName) {
        return {
          name: homeWorldName,
        };
      }
      return null;
    },
    species: ({ name }: { name: string }) => {
      const speciesName = CharactersData.find(value => value.name === name)
        ?.species;
      if (!speciesName)
        throw new Error("Species could not be found for " + name);

      return {
        name: speciesName,
      };
    },
    friends: ({ name }: { name: string }) => {
      return (
        CharactersData.find(
          value => value.name === name,
        )?.friends.map(name => ({ name })) ?? []
      );
    },
  },
  Planet: {
    climate: ({ name }: { name: string }) => {
      const climate = PlanetsData.find(value => value.name === name)?.climate;
      if (!climate) throw new Error("Climate could not be found for " + name);
      return climate;
    },
    neighbors: ({ name }: { name: string }) => {
      return (
        PlanetsData.find(value => value.name === name)?.neighbors.map(name => {
          return { name };
        }) ?? []
      );
    },
  },
  Species: {
    lifespan: ({ name }: { name: string }) => {
      const lifespan = SpeciesData.find(value => value.name === name)?.lifespan;

      if (lifespan === undefined)
        throw new Error("Lifespan could not be found for " + name);

      return lifespan;
    },
    origin: ({ name }: { name: string }) => {
      const origin = SpeciesData.find(value => value.name === name)?.origin;

      if (origin === undefined)
        throw new Error("Origin could not be found for " + name);

      return { name: origin };
    },
  },
  Query: {
    hero: () => {
      const chosenHero = sample(CharactersData);
      if (chosenHero) {
        return {
          name: chosenHero.name,
        };
      }
      return null;
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
