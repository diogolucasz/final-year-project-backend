import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICreateRoleDTO } from "../dto/ICreateRoleDTO";
import { IRolesRepository } from "../dto/IRolesRepository";

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

    async create( {description,name,permission}: ICreateRoleDTO): Promise<Role | Error> {

        const userToken = this.repository.create({
            description,
            name,
            permission,
        });
        
        console.log(userToken)

        await this.repository.save(userToken)
        
        return userToken
    }
}