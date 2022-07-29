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
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CategoryListRelationFilter } from "../../category/base/CategoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeListRelationFilter } from "../../grade/base/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TagListRelationFilter } from "../../tag/base/TagListRelationFilter";
@InputType()
class AppWhereInput {
  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  appAdmins?: UserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CategoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CategoryListRelationFilter)
  @IsOptional()
  @Field(() => CategoryListRelationFilter, {
    nullable: true,
  })
  categories?: CategoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => GradeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GradeListRelationFilter)
  @IsOptional()
  @Field(() => GradeListRelationFilter, {
    nullable: true,
  })
  grades?: GradeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TagListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TagListRelationFilter)
  @IsOptional()
  @Field(() => TagListRelationFilter, {
    nullable: true,
  })
  tags?: TagListRelationFilter;
}
export { AppWhereInput };