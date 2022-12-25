import { Module } from "@nestjs/common";
import { CardModuleBase } from "./base/card.module.base";
import { CardService } from "./card.service";
import { CardController } from "./card.controller";

@Module({
  imports: [CardModuleBase],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardService],
})
export class CardModule {}
