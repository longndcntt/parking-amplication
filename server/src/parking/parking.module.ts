import { Module } from "@nestjs/common";
import { ParkingModuleBase } from "./base/parking.module.base";
import { ParkingService } from "./parking.service";
import { ParkingController } from "./parking.controller";
import { ParkingResolver } from "./parking.resolver";

@Module({
  imports: [ParkingModuleBase],
  controllers: [ParkingController],
  providers: [ParkingService, ParkingResolver],
  exports: [ParkingService],
})
export class ParkingModule {}
