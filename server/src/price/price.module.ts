import { Module } from "@nestjs/common";
import { PriceModuleBase } from "./base/price.module.base";
import { PriceService } from "./price.service";
import { PriceController } from "./price.controller";
import { PriceResolver } from "./price.resolver";

@Module({
  imports: [PriceModuleBase],
  controllers: [PriceController],
  providers: [PriceService, PriceResolver],
  exports: [PriceService],
})
export class PriceModule {}
