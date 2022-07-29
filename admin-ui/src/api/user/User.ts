import { App } from "../app/App";

export type User = {
  apps?: Array<App>;
  children?: Array<User>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
  users?: Array<User>;
};
