/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateAppArgs } from "./CreateAppArgs";
import { UpdateAppArgs } from "./UpdateAppArgs";
import { DeleteAppArgs } from "./DeleteAppArgs";
import { AppFindManyArgs } from "./AppFindManyArgs";
import { AppFindUniqueArgs } from "./AppFindUniqueArgs";
import { App } from "./App";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { CategoryFindManyArgs } from "../../category/base/CategoryFindManyArgs";
import { Category } from "../../category/base/Category";
import { GradeFindManyArgs } from "../../grade/base/GradeFindManyArgs";
import { Grade } from "../../grade/base/Grade";
import { TagFindManyArgs } from "../../tag/base/TagFindManyArgs";
import { Tag } from "../../tag/base/Tag";
import { AppService } from "../app.service";

@graphql.Resolver(() => App)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AppResolverBase {
  constructor(
    protected readonly service: AppService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "App",
    action: "read",
    possession: "any",
  })
  async _appsMeta(
    @graphql.Args() args: AppFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [App])
  @nestAccessControl.UseRoles({
    resource: "App",
    action: "read",
    possession: "any",
  })
  async apps(@graphql.Args() args: AppFindManyArgs): Promise<App[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => App, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "App",
    action: "read",
    possession: "own",
  })
  async app(@graphql.Args() args: AppFindUniqueArgs): Promise<App | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => App)
  @nestAccessControl.UseRoles({
    resource: "App",
    action: "create",
    possession: "any",
  })
  async createApp(@graphql.Args() args: CreateAppArgs): Promise<App> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => App)
  @nestAccessControl.UseRoles({
    resource: "App",
    action: "update",
    possession: "any",
  })
  async updateApp(@graphql.Args() args: UpdateAppArgs): Promise<App | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => App)
  @nestAccessControl.UseRoles({
    resource: "App",
    action: "delete",
    possession: "any",
  })
  async deleteApp(@graphql.Args() args: DeleteAppArgs): Promise<App | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async appAdmins(
    @graphql.Parent() parent: App,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findAppAdmins(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Category])
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async categories(
    @graphql.Parent() parent: App,
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    const results = await this.service.findCategories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Grade])
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "read",
    possession: "any",
  })
  async grades(
    @graphql.Parent() parent: App,
    @graphql.Args() args: GradeFindManyArgs
  ): Promise<Grade[]> {
    const results = await this.service.findGrades(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Tag])
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "any",
  })
  async tags(
    @graphql.Parent() parent: App,
    @graphql.Args() args: TagFindManyArgs
  ): Promise<Tag[]> {
    const results = await this.service.findTags(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}