import { ParkingWhereInput } from "./ParkingWhereInput";
import { ParkingOrderByInput } from "./ParkingOrderByInput";

export type ParkingFindManyArgs = {
  where?: ParkingWhereInput;
  orderBy?: Array<ParkingOrderByInput>;
  skip?: number;
  take?: number;
};
