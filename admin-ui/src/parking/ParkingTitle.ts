import { Parking as TParking } from "../api/parking/Parking";

export const PARKING_TITLE_FIELD = "plate";

export const ParkingTitle = (record: TParking): string => {
  return record.plate || record.id;
};
