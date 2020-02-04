import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Planet {
  @Field()
  name: string;

  @Field()
  climate: string;

  @Field(() => [Planet])
  neighbors: Planet[];
}
