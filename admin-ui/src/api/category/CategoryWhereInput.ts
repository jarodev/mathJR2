import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  app?: AppWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
