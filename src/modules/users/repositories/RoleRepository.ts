import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICreateRoleDTO } from "../dto/ICreateRoleDTO";
import { IRolesRepository } from "../dto/IRolesRepository";

import { Role } from "../entities/Role";
import { User } from "../entities/User";

@EntityRepository(Role)
export class RoleRepository implements IRolesRepository {

    private repository: Repository<Role>;

    constructor() {
        this.repository = getRepository(Role);
    }
    
    async findByIds(ids: string[]): Promise<Role[]> {

        const permissions = await this.repository.findByIds(ids);

        return permissions;
    }

    async findByName(name: string): Promise<Role> {

        const user = await this.repository.findOne({
            where:
                { name }
        });

        return user;
    }

    async create({ description, name, permission }: ICreateRoleDTO): Promise<Role | Error> {

        const role = this.repository.create({
            description,
            name,
            permission,
        });

        await this.repository.save(role)

        return role
    }
}