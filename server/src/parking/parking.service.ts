import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ParkingServiceBase } from "./base/parking.service.base";

@Injectable()
export class ParkingService extends ParkingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
