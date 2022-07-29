import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type AppWhereInput = {
  appAdmins?: UserListRelationFilter;
  categories?: CategoryListRelationFilter;
  description?: StringNullableFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  tags?: TagListRelationFilter;
};
