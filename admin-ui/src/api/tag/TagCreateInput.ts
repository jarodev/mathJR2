import { AppCreateNestedManyWithoutTagsInput } from "./AppCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  apps?: AppCreateNestedManyWithoutTagsInput;
  name: string;
};
