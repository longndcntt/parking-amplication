import { PriceWhereInput } from "./PriceWhereInput";
import { PriceOrderByInput } from "./PriceOrderByInput";

export type PriceFindManyArgs = {
  where?: PriceWhereInput;
  orderBy?: Array<PriceOrderByInput>;
  skip?: number;
  take?: number;
};
