export const CharactersData: {
  name: string;
  friends: string[];
  homeWorld?: string;
  species: string;
}[] = [
  {
    name: "A",
    friends: ["B", "D"],
    homeWorld: "Planet A",
    species: "Species A",
  },
  {
    name: "B",
    friends: ["A"],
    homeWorld: "Planet A",
    species: "Species B",
  },
  {
    name: "C",
    friends: [],
    species: "Species B",
  },
  {
    name: "D",
    friends: ["A"],
    homeWorld: "Planet B",
    species: "Species A",
  },
];

export const PlanetsData = [
  {
    name: "Planet A",
    climate: "Tropical",
    neighbors: ["Planet B"],
  },
  {
    name: "Planet B",
    climate: "Polar Chill",
    neighbors: ["Planet A"],
  },
  {
    name: "Planet C",
    climate: "Arid",
    neighbors: [],
  },
];

export const SpeciesData = [
  {
    name: "Species A",
    lifespan: 100,
    origin: "Planet A",
  },
  {
    name: "Species B",
    lifespan: 80,
    origin: "Planet C",
  },
];
