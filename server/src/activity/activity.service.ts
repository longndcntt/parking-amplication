import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ActivityServiceBase } from "./base/activity.service.base";

@Injectable()
export class ActivityService extends ActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
