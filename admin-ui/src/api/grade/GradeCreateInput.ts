import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";

export type GradeCreateInput = {
  app?: AppWhereUniqueInput | null;
  name?: string | null;
};
