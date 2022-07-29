import { UserUpdateManyWithoutAppsInput } from "./UserUpdateManyWithoutAppsInput";
import { CategoryUpdateManyWithoutAppsInput } from "./CategoryUpdateManyWithoutAppsInput";
import { GradeUpdateManyWithoutAppsInput } from "./GradeUpdateManyWithoutAppsInput";
import { TagUpdateManyWithoutAppsInput } from "./TagUpdateManyWithoutAppsInput";

export type AppUpdateInput = {
  appAdmins?: UserUpdateManyWithoutAppsInput;
  categories?: CategoryUpdateManyWithoutAppsInput;
  description?: string | null;
  grades?: GradeUpdateManyWithoutAppsInput;
  name?: string;
  tags?: TagUpdateManyWithoutAppsInput;
};
