import { IPermissionsRepository } from "../../modules/users/dto/IPermissionsRepository";
import { IRolesRepository } from "../../modules/users/dto/IRolesRepository";
import { Role } from "../../modules/users/entities/Role";
import { AppError } from "../../shared/errors/AppError";

interface IRequest {
    name: string;
    description: string;
    permissions: string[];
};

export class CreateRoleUserCase {

    constructor(
        private rolesRepository: IRolesRepository,
        private permissionsRepository: IPermissionsRepository,
    ) { }

    async execute({ name, description, permissions }: IRequest): Promise<Role | Error> {

        const roleAlreadyExists = await this.rolesRepository.findByName(name);

        if (roleAlreadyExists) {
            throw new AppError(400, `Role ${name} already exists.`)
        }

        const permissionsExists = await this.permissionsRepository.findByIds(permissions);

        const role = await this.rolesRepository.create({
            name,
            description,
            permission: permissionsExists,
        });

        return role;
    }
}