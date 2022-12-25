import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CardService } from "./card.service";
import { CardControllerBase } from "./base/card.controller.base";

@swagger.ApiTags("cards")
@common.Controller("cards")
export class CardController extends CardControllerBase {
  constructor(
    protected readonly service: CardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
