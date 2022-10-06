import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoDTO {
  @Field(type => String)
  title: string;

  @Field(type => Boolean)
  checked: boolean;
}
