import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParkingService } from "./parking.service";
import { ParkingControllerBase } from "./base/parking.controller.base";

@swagger.ApiTags("parkings")
@common.Controller("parkings")
export class ParkingController extends ParkingControllerBase {
  constructor(
    protected readonly service: ParkingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
