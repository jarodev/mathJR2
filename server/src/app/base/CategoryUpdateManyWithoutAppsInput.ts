/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CategoryUpdateManyWithoutAppsInput {
  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryWhereUniqueInput],
  })
  connect?: Array<CategoryWhereUniqueInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryWhereUniqueInput],
  })
  disconnect?: Array<CategoryWhereUniqueInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryWhereUniqueInput],
  })
  set?: Array<CategoryWhereUniqueInput>;
}
export { CategoryUpdateManyWithoutAppsInput };