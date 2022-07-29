import { AppCreateNestedManyWithoutUsersInput } from "./AppCreateNestedManyWithoutUsersInput";
import { UserCreateNestedManyWithoutUsersInput } from "./UserCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  apps?: AppCreateNestedManyWithoutUsersInput;
  children?: UserCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
  users?: UserCreateNestedManyWithoutUsersInput;
};
