import { AppListRelationFilter } from "../app/AppListRelationFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  apps?: AppListRelationFilter;
  children?: UserListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  users?: UserListRelationFilter;
};
