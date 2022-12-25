import { Module } from "@nestjs/common";
import { ActivityModuleBase } from "./base/activity.module.base";
import { ActivityService } from "./activity.service";
import { ActivityController } from "./activity.controller";

@Module({
  imports: [ActivityModuleBase],
  controllers: [ActivityController],
  providers: [ActivityService],
  exports: [ActivityService],
})
export class ActivityModule {}
