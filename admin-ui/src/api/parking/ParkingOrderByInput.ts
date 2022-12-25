import { SortOrder } from "../../util/SortOrder";

export type ParkingOrderByInput = {
  checkin?: SortOrder;
  checkout?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  plate?: SortOrder;
  updatedAt?: SortOrder;
};
