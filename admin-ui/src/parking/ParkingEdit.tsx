import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ParkingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="checkin" source="checkin" />
        <DateTimeInput label="checkout" source="checkout" />
        <TextInput label="plate" source="plate" />
      </SimpleForm>
    </Edit>
  );
};
