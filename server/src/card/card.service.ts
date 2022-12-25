import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CardServiceBase } from "./base/card.service.base";

@Injectable()
export class CardService extends CardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
