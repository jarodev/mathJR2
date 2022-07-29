import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppTitle } from "../app/AppTitle";

export const TagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="apps"
          reference="App"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
