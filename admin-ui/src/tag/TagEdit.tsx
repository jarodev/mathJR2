import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppTitle } from "../app/AppTitle";

export const TagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
