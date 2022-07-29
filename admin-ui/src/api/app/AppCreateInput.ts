import { UserCreateNestedManyWithoutAppsInput } from "./UserCreateNestedManyWithoutAppsInput";
import { CategoryCreateNestedManyWithoutAppsInput } from "./CategoryCreateNestedManyWithoutAppsInput";
import { GradeCreateNestedManyWithoutAppsInput } from "./GradeCreateNestedManyWithoutAppsInput";
import { TagCreateNestedManyWithoutAppsInput } from "./TagCreateNestedManyWithoutAppsInput";

export type AppCreateInput = {
  appAdmins?: UserCreateNestedManyWithoutAppsInput;
  categories?: CategoryCreateNestedManyWithoutAppsInput;
  description?: string | null;
  grades?: GradeCreateNestedManyWithoutAppsInput;
  name: string;
  tags?: TagCreateNestedManyWithoutAppsInput;
};
