/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GradeWhereUniqueInput } from "../../grade/base/GradeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class GradeCreateNestedManyWithoutAppsInput {
  @Field(() => [GradeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GradeWhereUniqueInput],
  })
  connect?: Array<GradeWhereUniqueInput>;
}
export { GradeCreateNestedManyWithoutAppsInput };
