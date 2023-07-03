import { ArgsType, Field, InputType, Int } from "type-graphql";

@ArgsType()
export class PaginationArgsType {
  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
