import { AppError } from "../../../../shared/errors/AppError";
import { IRolesRepository } from "../../dto/IRolesRepository";
import { IUsersRepository } from "../../dto/IUsersRepository";

interface IRequest {
    id: string;
    roles: string[];
};

export class AssignRoleUserCase {

    constructor(
        private userRepository: IUsersRepository,
        private rolesRepository: IRolesRepository
    ) { }

    async execute({ id, roles }: IRequest) {

        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError(400, `User does not exists.`)
        }

        const rolesExists = await this.rolesRepository.findByIds(roles);

        user.roles = rolesExists;

        await this.userRepository.save(user)

        return user;
    }
}