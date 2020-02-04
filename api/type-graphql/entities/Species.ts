import { Field, ObjectType } from "type-graphql";

import { Planet } from "./Planet";

@ObjectType()
export class Species {
  @Field()
  name: string;

  @Field()
  lifespan: number;

  @Field()
  origin: Planet;
}
