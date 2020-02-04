import { FieldResolver, Resolver, Root } from "type-graphql";

import { SpeciesData } from "../../data";
import { Species } from "../entities/Species";

@Resolver(() => Species)
export class SpeciesResolver {
  @FieldResolver()
  lifespan(@Root() { name }: Pick<Species, "name">) {
    const lifespan = SpeciesData.find(value => value.name === name)?.lifespan;

    if (!lifespan) throw new Error("Lifespan could not be found for " + name);

    return lifespan;
  }

  @FieldResolver()
  origin(@Root() { name }: Pick<Species, "name">) {
    const origin = SpeciesData.find(value => value.name === name)?.origin;

    if (!origin) throw new Error("Origin could not be found for " + name);

    return { name: origin };
  }
}
