import { sample } from "lodash";
import { FieldResolver, Query, Resolver, Root } from "type-graphql";

import { CharactersData } from "../../data";
import { Character } from "../entities/Character";

@Resolver(() => Character)
export class CharacterResolver {
  @Query(() => Character)
  hero() {
    const chosenHero = sample(CharactersData);
    if (chosenHero) {
      return {
        name: chosenHero.name,
        friends: chosenHero.friends.map(name => ({ name })),
        homeWorld: chosenHero.homeWorld
          ? { name: chosenHero.homeWorld }
          : undefined,
        species: { name: chosenHero.species },
      };
    }
    return null;
  }

  @FieldResolver()
  friends(@Root() { name, friends }: Pick<Character, "name" | "friends">) {
    if (friends) {
      return friends;
    }

    return (
      CharactersData.find(value => value.name === name)?.friends.map(name => ({
        name,
      })) ?? []
    );
  }

  @FieldResolver()
  homeWorld(
    @Root() { name, homeWorld }: Pick<Character, "name" | "homeWorld">,
  ) {
    if (homeWorld) {
      return homeWorld;
    }

    const homeWorldName = CharactersData.find(value => value.name === name)
      ?.homeWorld;

    if (homeWorldName) {
      return {
        name: homeWorldName,
      };
    }
    return null;
  }

  @FieldResolver()
  species(@Root() { name, species }: Pick<Character, "name" | "species">) {
    if (species) {
      return species;
    }

    const speciesName = CharactersData.find(value => value.name === name)
      ?.species;
    if (!speciesName) throw new Error("Species could not be found for " + name);

    return {
      name: speciesName,
    };
  }
}
