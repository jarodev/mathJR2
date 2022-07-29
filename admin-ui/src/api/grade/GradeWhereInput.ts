import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GradeWhereInput = {
  app?: AppWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
