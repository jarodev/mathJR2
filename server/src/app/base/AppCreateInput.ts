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
import { UserCreateNestedManyWithoutAppsInput } from "./UserCreateNestedManyWithoutAppsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CategoryCreateNestedManyWithoutAppsInput } from "./CategoryCreateNestedManyWithoutAppsInput";
import { GradeCreateNestedManyWithoutAppsInput } from "./GradeCreateNestedManyWithoutAppsInput";
import { TagCreateNestedManyWithoutAppsInput } from "./TagCreateNestedManyWithoutAppsInput";
@InputType()
class AppCreateInput {
  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutAppsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutAppsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutAppsInput, {
    nullable: true,
  })
  appAdmins?: UserCreateNestedManyWithoutAppsInput;

  @ApiProperty({
    required: false,
    type: () => CategoryCreateNestedManyWithoutAppsInput,
  })
  @ValidateNested()
  @Type(() => CategoryCreateNestedManyWithoutAppsInput)
  @IsOptional()
  @Field(() => CategoryCreateNestedManyWithoutAppsInput, {
    nullable: true,
  })
  categories?: CategoryCreateNestedManyWithoutAppsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => GradeCreateNestedManyWithoutAppsInput,
  })
  @ValidateNested()
  @Type(() => GradeCreateNestedManyWithoutAppsInput)
  @IsOptional()
  @Field(() => GradeCreateNestedManyWithoutAppsInput, {
    nullable: true,
  })
  grades?: GradeCreateNestedManyWithoutAppsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => TagCreateNestedManyWithoutAppsInput,
  })
  @ValidateNested()
  @Type(() => TagCreateNestedManyWithoutAppsInput)
  @IsOptional()
  @Field(() => TagCreateNestedManyWithoutAppsInput, {
    nullable: true,
  })
  tags?: TagCreateNestedManyWithoutAppsInput;
}
export { AppCreateInput };