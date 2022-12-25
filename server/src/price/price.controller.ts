import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PriceService } from "./price.service";
import { PriceControllerBase } from "./base/price.controller.base";

@swagger.ApiTags("prices")
@common.Controller("prices")
export class PriceController extends PriceControllerBase {
  constructor(
    protected readonly service: PriceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
