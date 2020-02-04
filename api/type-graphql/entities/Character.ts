import { Field, ObjectType } from "type-graphql";

import { Planet } from "./Planet";
import { Species } from "./Species";

@ObjectType()
export class Character {
  @Field()
  name: string;

  @Field(() => [Character])
  friends: Character[];

  @Field(() => Planet, { nullable: true })
  homeWorld?: Planet;

  @Field(() => Species)
  species: Species;
}
