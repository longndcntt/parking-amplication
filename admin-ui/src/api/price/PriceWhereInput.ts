import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PriceWhereInput = {
  amount?: FloatNullableFilter;
  endAt?: StringNullableFilter;
  id?: StringFilter;
  startAt?: DateTimeNullableFilter;
};
