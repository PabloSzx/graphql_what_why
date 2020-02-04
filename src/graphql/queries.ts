import gql from "graphql-tag";

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
