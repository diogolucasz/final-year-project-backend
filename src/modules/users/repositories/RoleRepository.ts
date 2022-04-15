import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICreateRoleDTO } from "../dto/ICreateRoleDTO";
import { IRolesRepository } from "../dto/IRoleRepository";
import { Role } from "../entities/Role";

@EntityRepository(Role)
export class RoleRepository implements IRolesRepository {

    private repository: Repository<Role>;

    constructor() {
        this.repository = getRepository(Role);
    }

    async findByName(name: string): Promise<Role> {

        const user = await this.repository.findOne({
            where:
                { name }
        });

        return user;
    }

    async create(data: ICreateRoleDTO): Promise<Role> {
        const permission = this.repository.create(data);

        await this.repository.save(permission);

        return permission;
    }

    async save(data: Role): Promise<Role> {

        return this.repository.save(data);

    }
}