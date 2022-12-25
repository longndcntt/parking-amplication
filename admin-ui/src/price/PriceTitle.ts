import { Price as TPrice } from "../api/price/Price";

export const PRICE_TITLE_FIELD = "endAt";

export const PriceTitle = (record: TPrice): string => {
  return record.endAt || record.id;
};
