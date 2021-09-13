import { Field, ObjectType, ID, Int } from 'type-graphql';

@ObjectType()
export class CreateTeachersDto {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}