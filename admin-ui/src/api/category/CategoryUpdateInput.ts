import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";

export type CategoryUpdateInput = {
  app?: AppWhereUniqueInput | null;
  name?: string | null;
};
