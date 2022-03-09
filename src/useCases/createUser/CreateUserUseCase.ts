import { ICreateUserDTO } from "../../modules/users/dto/ICreateUserDTO";
import { hash } from "bcryptjs";
import { User } from "../../modules/users/entities/User";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../modules/users/repositories/UserTokensRepository";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private usersTokensRepository: IUsersTokensRepository,
    ) { }

    async execute({ name, surname, username, email, password, course_id }: ICreateUserDTO): Promise<Error | User> {

        const existUser = await this.usersRepository.findByEmail(email);

        if (existUser) {
            return new Error("User already exists");
        }

        const passwordHashed = await hash(password, 8)

        const user = await this.usersRepository.create({
            name,
            surname,
            username,
            email,
            course_id,
            password: passwordHashed,
            course,
            created_at, id, permissions, roles
        });

        await this.usersRepository.save(user);

        return user;
    }
}

