import { IPermissionsRepository } from "../../modules/users/dto/IPermissionsRepository";
import { AppError } from "../../shared/errors/AppError";

interface IRequest {
    name: string;
    description: string;
};


export class CreatePermissionUserCase {

    constructor(
        private permissionsRepository: IPermissionsRepository,
    ) { }

    async execute({ name, description }: IRequest) {

        const permissionAlreadyExists = await this.permissionsRepository.findByName(name);

        if (permissionAlreadyExists) {
            throw new AppError(400, `Permission ${name} already exists.`)
        }

        const permission = this.permissionsRepository.create({
            name,
            description,
        });

        await this.permissionsRepository.save(await permission);

        return permission;
    }
}