import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";

export type CategoryCreateInput = {
  app?: AppWhereUniqueInput | null;
  name?: string | null;
};
