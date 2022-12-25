import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  endAt?: SortOrder;
  id?: SortOrder;
  startAt?: SortOrder;
  updatedAt?: SortOrder;
};
