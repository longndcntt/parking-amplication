import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ParkingWhereInput = {
  checkin?: DateTimeNullableFilter;
  checkout?: DateTimeNullableFilter;
  id?: StringFilter;
  plate?: StringNullableFilter;
};
