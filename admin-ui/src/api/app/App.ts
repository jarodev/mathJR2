import { User } from "../user/User";
import { Category } from "../category/Category";
import { Grade } from "../grade/Grade";
import { Tag } from "../tag/Tag";

export type App = {
  appAdmins?: Array<User>;
  categories?: Array<Category>;
  createdAt: Date;
  description: string | null;
  grades?: Array<Grade>;
  id: string;
  name: string;
  tags?: Array<Tag>;
  updatedAt: Date;
};
