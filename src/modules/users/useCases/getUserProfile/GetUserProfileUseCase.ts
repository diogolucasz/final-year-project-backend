import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../dto/IUsersRepository";
import { Role } from "../../entities/Role";
import { User } from "../../entities/User";

interface IResponse {
    //userProfile: User
}

export class GetUserProfileUseCase {

    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async execute({ id }): Promise<IResponse> {

        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError(400, "User does not exists");
        }

        // const passwordHashed = await hash(password, 8)

        // const user = await this.postsRepository.list();

        //const roles = await this.usersRepository.findRoleByUserID(user.id);

        const userProfile = await this.usersRepository.getProfileById(id)

        // const response: IResponse = {
        //     user: {
        //         name: user.name,
        //         email: user.email,
        //         id: user.id,
        //     },
        //     // token,
        //     roles,
        //     // refresh_token,
        // }

        return {
            userProfile
        };

    }
}

