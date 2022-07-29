import { AppListRelationFilter } from "../app/AppListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TagWhereInput = {
  apps?: AppListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
