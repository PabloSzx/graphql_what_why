import gql from "graphql-tag";

export interface IHeroData {
  hero?: {
    name: string;
    friends: { name: string; friends: { name: string }[] }[];
    species: {
      name: string;
      lifespan: number;
      origin: { name: string; neighbors: { name: string; climate: string }[] };
    };
    homeWorld?: {
      name: string;
      neighbors: { name: string }[];
      climate: string;
    };
  };
}

export const HERO_QUERY = gql`
  query {
    hero {
      name
      friends {
        name
        friends {
          name
        }
      }
      species {
        name
        lifespan
        origin {
          name
          neighbors {
            name
            climate
          }
        }
      }
      homeWorld {
        name
        neighbors {
          name
        }
        climate
      }
    }
  }
`;
