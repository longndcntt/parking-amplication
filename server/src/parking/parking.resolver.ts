import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ParkingResolverBase } from "./base/parking.resolver.base";
import { Parking } from "./base/Parking";
import { ParkingService } from "./parking.service";

@graphql.Resolver(() => Parking)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ParkingResolver extends ParkingResolverBase {
  constructor(
    protected readonly service: ParkingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
