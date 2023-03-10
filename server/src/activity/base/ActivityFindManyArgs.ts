/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActivityWhereInput } from "./ActivityWhereInput";
import { Type } from "class-transformer";
import { ActivityOrderByInput } from "./ActivityOrderByInput";

@ArgsType()
class ActivityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ActivityWhereInput,
  })
  @Field(() => ActivityWhereInput, { nullable: true })
  @Type(() => ActivityWhereInput)
  where?: ActivityWhereInput;

  @ApiProperty({
    required: false,
    type: [ActivityOrderByInput],
  })
  @Field(() => [ActivityOrderByInput], { nullable: true })
  @Type(() => ActivityOrderByInput)
  orderBy?: Array<ActivityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ActivityFindManyArgs };
