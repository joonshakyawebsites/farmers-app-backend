import { MaxLength, MinLength } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import {
  ColdStorageItem,
  ColdStorageItemTypeChoice,
} from "@generated/type-graphql";

@InputType()
export class CreateOrUpdateColdStorageItemInput
  implements Partial<ColdStorageItem>
{
  @Field(() => Int)
  uInt: number;

  @Field(() => String)
  name: string;

  @Field(() => ColdStorageItemTypeChoice)
  type: ColdStorageItemTypeChoice;

  @Field(() => Int)
  quantity: number;

  @Field(() => String)
  date: string;
}
