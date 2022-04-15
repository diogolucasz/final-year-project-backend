import { IPermissionsRepository } from "../../modules/users/dto/IPermissionsRepository";
import { IRolesRepository } from "../../modules/users/dto/IRolesRepository";
import { AppError } from "../../shared/errors/AppError";

interface IRequest {
    name: string;
    description: string;
    permissions: string[],
};


export class CreateRoleUserCase {

    constructor(
        private rolesRepository: IRolesRepository,
        private permissionsRepository: IPermissionsRepository,
    ) { }

    async execute({ name, description, permissions }: IRequest) {

        const roleAlreadyExists = await this.rolesRepository.findByName(name);

        if (roleAlreadyExists) {
            throw new AppError(`Role ${name} already exists.`)
        }
        
        const permissionsExists = await this.permissionsRepository.findByIds(
            permissions
        );

        console.log(permissions)

        const role = this.rolesRepository.create({
            name,
            description,
            //permissionsExists
            ///permissions: permissionsExists,
        });

        await this.rolesRepository.save(await role);

        return role;
    }
}