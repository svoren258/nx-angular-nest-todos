import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'todo ' })
export class Todo {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  title: string;

  @Field(type => Boolean)
  checked?: boolean;
}
