/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Card, Activity } from "@prisma/client";

export class CardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CardFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CardFindManyArgs>
  ): Promise<number> {
    return this.prisma.card.count(args);
  }

  async findMany<T extends Prisma.CardFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CardFindManyArgs>
  ): Promise<Card[]> {
    return this.prisma.card.findMany(args);
  }
  async findOne<T extends Prisma.CardFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CardFindUniqueArgs>
  ): Promise<Card | null> {
    return this.prisma.card.findUnique(args);
  }
  async create<T extends Prisma.CardCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CardCreateArgs>
  ): Promise<Card> {
    return this.prisma.card.create<T>(args);
  }
  async update<T extends Prisma.CardUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CardUpdateArgs>
  ): Promise<Card> {
    return this.prisma.card.update<T>(args);
  }
  async delete<T extends Prisma.CardDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CardDeleteArgs>
  ): Promise<Card> {
    return this.prisma.card.delete(args);
  }

  async findActivities(
    parentId: string,
    args: Prisma.ActivityFindManyArgs
  ): Promise<Activity[]> {
    return this.prisma.card
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .activities(args);
  }
}
