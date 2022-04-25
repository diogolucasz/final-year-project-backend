import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICreatePermissionDTO } from "../dto/ICreatePermissionDTO";
import { IPermissionsRepository } from "../dto/IPermissionsRepository";
import { Permission } from "../entities/Permission";

@EntityRepository(Permission)
export class PermissionRepository implements IPermissionsRepository {

    private repository: Repository<Permission>;

    constructor() {
        this.repository = getRepository(Permission);
    }

    async findByIds(ids: string[]): Promise<Permission[]> {

        const permissions = await this.repository.findByIds(ids);

        return permissions;
    }

    async findByName(name: string): Promise<Permission> {

        const user = await this.repository.findOne({
            where:
                { name }
        });

        return user;
    }

    async create(data: ICreatePermissionDTO): Promise<Permission> {
        const permission = this.repository.create(data);

        await this.repository.save(permission);

        return permission;
    }

    async save(data: Permission): Promise<Permission> {

        return this.repository.save(data);

    }
}