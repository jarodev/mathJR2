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
import { UserUpdateManyWithoutAppsInput } from "./UserUpdateManyWithoutAppsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CategoryUpdateManyWithoutAppsInput } from "./CategoryUpdateManyWithoutAppsInput";
import { GradeUpdateManyWithoutAppsInput } from "./GradeUpdateManyWithoutAppsInput";
import { TagUpdateManyWithoutAppsInput } from "./TagUpdateManyWithoutAppsInput";
@InputType()
class AppUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutAppsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutAppsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutAppsInput, {
    nullable: true,
  })
  appAdmins?: UserUpdateManyWithoutAppsInput;

  @ApiProperty({
    required: false,
    type: () => CategoryUpdateManyWithoutAppsInput,
  })
  @ValidateNested()
  @Type(() => CategoryUpdateManyWithoutAppsInput)
  @IsOptional()
  @Field(() => CategoryUpdateManyWithoutAppsInput, {
    nullable: true,
  })
  categories?: CategoryUpdateManyWithoutAppsInput;

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
    type: () => GradeUpdateManyWithoutAppsInput,
  })
  @ValidateNested()
  @Type(() => GradeUpdateManyWithoutAppsInput)
  @IsOptional()
  @Field(() => GradeUpdateManyWithoutAppsInput, {
    nullable: true,
  })
  grades?: GradeUpdateManyWithoutAppsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => TagUpdateManyWithoutAppsInput,
  })
  @ValidateNested()
  @Type(() => TagUpdateManyWithoutAppsInput)
  @IsOptional()
  @Field(() => TagUpdateManyWithoutAppsInput, {
    nullable: true,
  })
  tags?: TagUpdateManyWithoutAppsInput;
}
export { AppUpdateInput };
