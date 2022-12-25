import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PriceServiceBase } from "./base/price.service.base";

@Injectable()
export class PriceService extends PriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
