import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ParkingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="checkin" source="checkin" />
        <DateTimeInput label="checkout" source="checkout" />
        <TextInput label="plate" source="plate" />
      </SimpleForm>
    </Create>
  );
};
