import { FieldResolver, Resolver, Root } from "type-graphql";

import { PlanetsData } from "../../data";
import { Planet } from "../entities/Planet";

@Resolver(() => Planet)
export class PlanetResolver {
  @FieldResolver()
  climate(@Root() { name }: Pick<Planet, "name">) {
    const climate = PlanetsData.find(value => value.name === name)?.climate;

    if (!climate) throw new Error("Climate could not be found for " + name);

    return climate;
  }

  @FieldResolver()
  neighbors(@Root() { name }: Pick<Planet, "name">) {
    return (
      PlanetsData.find(value => value.name === name)?.neighbors.map(name => ({
        name,
      })) ?? []
    );
  }
}
