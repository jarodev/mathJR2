import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";

export type GradeUpdateInput = {
  app?: AppWhereUniqueInput | null;
  name?: string | null;
};
