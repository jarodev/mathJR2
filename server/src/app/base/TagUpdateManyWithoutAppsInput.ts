/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagWhereUniqueInput } from "../../tag/base/TagWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class TagUpdateManyWithoutAppsInput {
  @Field(() => [TagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagWhereUniqueInput],
  })
  connect?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagWhereUniqueInput],
  })
  disconnect?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagWhereUniqueInput],
  })
  set?: Array<TagWhereUniqueInput>;
}
export { TagUpdateManyWithoutAppsInput };
