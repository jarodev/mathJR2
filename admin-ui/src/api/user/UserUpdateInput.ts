import { AppUpdateManyWithoutUsersInput } from "./AppUpdateManyWithoutUsersInput";
import { UserUpdateManyWithoutUsersInput } from "./UserUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  apps?: AppUpdateManyWithoutUsersInput;
  children?: UserUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
  users?: UserUpdateManyWithoutUsersInput;
};
