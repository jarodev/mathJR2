/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppCreateNestedManyWithoutUsersInput } from "./AppCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutUsersInput } from "./UserCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AppCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AppCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  apps?: AppCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  children?: UserCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutUsersInput;
}
export { UserCreateInput };