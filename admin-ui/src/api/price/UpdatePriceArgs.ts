import { PriceWhereUniqueInput } from "./PriceWhereUniqueInput";
import { PriceUpdateInput } from "./PriceUpdateInput";

export type UpdatePriceArgs = {
  where: PriceWhereUniqueInput;
  data: PriceUpdateInput;
};
