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
import { AppUpdateManyWithoutTagsInput } from "./AppUpdateManyWithoutTagsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class TagUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AppUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => AppUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => AppUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  apps?: AppUpdateManyWithoutTagsInput;

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
}
export { TagUpdateInput };
