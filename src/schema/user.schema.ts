import { MaxLength, MinLength } from "class-validator";
import { Field, Float, InputType, ObjectType } from "type-graphql";
import { TruckTypeChoice, User, UserTypeChoice } from "@generated/type-graphql";

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field(() => UserTypeChoice)
  type: UserTypeChoice;

  @Field(() => String)
  fullName: string;

  @MinLength(10, {
    message: "phone number must not be less than 10 digits",
  })
  @MaxLength(10, {
    message: "phone number must not be longer than 10 digits",
  })
  @Field(() => String)
  phone: string;

  @Field(() => String, { nullable: true })
  driverTruckNumber?: string;

  @Field(() => TruckTypeChoice, {
    nullable: true,
  })
  driverTruckType?: TruckTypeChoice;

  @MinLength(6, {
    message: "password must be at least 6 characters long",
  })
  @MaxLength(50, {
    message: "password must not be longer than 50 characters",
  })
  @Field(() => String)
  password: string;

  @Field(() => String)
  confirmPassword?: string;

  @Field(() => String)
  username: string;
}

@InputType()
export class LoginInput implements Partial<User> {
  @Field(() => UserTypeChoice)
  type: UserTypeChoice;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class SetUserLocationInput {
  @Field(() => String)
  locationName: string;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;
}

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  token: string;

  @Field(() => User)
  user: User;
}
