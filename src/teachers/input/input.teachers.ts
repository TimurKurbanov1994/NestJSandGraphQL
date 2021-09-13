import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class InputTeachers {
  @Field()
  readonly id: number
  @Field()
  readonly name: string
}