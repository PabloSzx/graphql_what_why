import useAxios from "axios-hooks";
import { NextPage } from "next";

import { CharactersData, PlanetsData, SpeciesData } from "../../api/data";

const REST: NextPage = () => {
  const [{ data: dataHero, loading, error }] = useAxios<
    typeof CharactersData[number]
  >("http://localhost:3002/characters/hero");

  const [{ data: dataSpecies }] = useAxios<typeof SpeciesData[number]>({
    url: "http://localhost:3002/species/speciesData",
    params: {
      name: dataHero?.species ?? "",
    },
  });

  const [{ data: dataSpeciesOrigin }] = useAxios<typeof PlanetsData[number]>({
    url: "http://localhost:3002/planets/planetData",
    params: {
      name: dataSpecies?.origin ?? "",
    },
  });

  const [{ data: dataSpeciesOriginNeighbors }] = useAxios<typeof PlanetsData>({
    url: "http://localhost:3002/planets/planetsList",
    params: {
      planets: dataSpeciesOrigin?.neighbors?.join(",") ?? "",
    },
  });

  const [{ data: dataHeroHomeWorld }] = useAxios<typeof PlanetsData[number]>({
    url: "http://localhost:3002/planets/planetData",
    params: {
      name: dataHero?.homeWorld ?? "",
    },
  });

  const [{ data: dataFriends }] = useAxios<typeof CharactersData>({
    url: "http://localhost:3002/characters/friends",
    params: {
      friends: dataHero?.friends.join(","),
    },
  });

  if (error) {
    return <div>{JSON.stringify(error, null, 2)}</div>;
  }

  return (
    <div>
      {loading
        ? "Loading..."
        : JSON.stringify(
            {
              hero: {
                name: dataHero.name,

                friends: dataFriends
                  ? dataFriends.map(({ name, friends }) => ({
                      name,
                      friends: friends.map(name => ({ name })),
                    }))
                  : "Loading...",
                species: dataSpecies
                  ? {
                      name: dataSpecies.name,
                      lifespan: dataSpecies.lifespan,
                      origin: dataSpeciesOrigin
                        ? {
                            name: dataSpeciesOrigin.name,
                            neighbors: dataSpeciesOriginNeighbors
                              ? dataSpeciesOriginNeighbors.map(
                                  ({ name, climate }) => ({ name, climate }),
                                )
                              : "Loading...",
                          }
                        : "Loading...",
                    }
                  : "Loading...",
                homeWorld: dataHeroHomeWorld
                  ? {
                      name: dataHeroHomeWorld.name,
                      neighbors: dataHeroHomeWorld.neighbors.map(name => ({
                        name,
                      })),
                      climate: dataHeroHomeWorld.climate,
                    }
                  : "Loading...",
              },
            },
            null,
            2,
          )}
    </div>
  );
};

export default REST;
