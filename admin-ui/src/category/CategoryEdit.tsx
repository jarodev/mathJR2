import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AppTitle } from "../app/AppTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="app.id" reference="App" label="Apps">
          <SelectInput optionText={AppTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
